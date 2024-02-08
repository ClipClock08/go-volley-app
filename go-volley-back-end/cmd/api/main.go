package main

import (
	"fmt"
	"log"
	"net/http"
)

const port = 8080

type application struct {
	Domain string
}

func main() {
	// app configs
	var app application

	// start the server
	app.Domain = "example.com"

	log.Println("Starting application on port: ", port)

	http.HandleFunc("/", app.Home)

	err := http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}

}
