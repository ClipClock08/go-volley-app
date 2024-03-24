package main

import (
	"backend/cmd/api"
	"flag"
	"fmt"
	"log"
	"net/http"
	"time"

	"backend/internal/repository/dbrepo"
)

const port = 8080

func main() {
	// app configs
	var app api.Application

	connStr := "user=postgres password=postgres dbname=volley_valky host=localhost port=5432 sslmode=disable"
	// read from cmd
	flag.StringVar(&app.DSN, "dsn", connStr, "Postgres connection string")
	flag.StringVar(&app.JWTSecret, "jwt-secret", "verysecret", "signing secret")
	flag.StringVar(&app.JWTIssuer, "jwt-issuer", "example.com", "signing issuer")
	flag.StringVar(&app.JWTAudience, "jwt-audience", "example.com", "signing audience")
	flag.StringVar(&app.CookieDomain, "cookie-domain", "localhost", "cookie domain")
	flag.StringVar(&app.Domain, "domain", "example.com", "domain")
	flag.Parse()

	//connect to db
	conn, err := app.ConnectToDB()
	if err != nil {
		log.Fatal(err)
	}

	app.DB = &dbrepo.PostgresDBRepo{DB: conn}
	defer func() { _ = app.DB.Connection().Close() }()

	app.Auth = api.Auth{
		Issuer:        app.JWTIssuer,
		Audience:      app.JWTAudience,
		Secret:        app.JWTSecret,
		TokenExpiry:   15 * time.Minute,
		RefreshExpiry: 24 * time.Hour,
		CookieDomain:  app.CookieDomain,
		CookiePath:    "/",
		CookieName:    "__Host-refresh_token",
	}
	// start the server

	log.Println("Starting application on port: ", port)

	http.HandleFunc("/", app.Home)

	err = http.ListenAndServe(fmt.Sprintf(":%d", port), app.Routes())
	if err != nil {
		log.Fatal(err)
	}

}
