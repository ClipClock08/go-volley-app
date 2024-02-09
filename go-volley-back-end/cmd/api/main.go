package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"backend/internal/repository"
	"backend/internal/repository/dbrepo"
)

const port = 8080

type application struct {
	DSN    string
	Domain string
	DB     repository.DatabaseRepo
}

func main() {
	// app configs
	var app application

	// read from cmd
	flag.StringVar(&app.DSN, "dsn", "host=localhost port=5432 user=postgres password=postgres dbname=volley_valky sslmode=disable timezone=UTC connect_timeout=5", "Postgres connection string")
	flag.Parse()

	//connect to db
	conn, err := app.connectToDB()
	if err != nil {
		log.Fatal(err)
	}

	app.DB = &dbrepo.PostgresDBRepo{DB: conn}
	defer func() { _ = app.DB.Connection().Close() }()

	// start the server
	app.Domain = "example.com"

	log.Println("Starting application on port: ", port)

	http.HandleFunc("/", app.Home)

	err = http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}

}
