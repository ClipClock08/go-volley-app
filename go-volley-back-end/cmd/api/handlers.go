package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "Go Volley App up and running",
		Version: "0.0.1 Beta",
	}

	out, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	_, err = w.Write(out)
	if err != nil {
		fmt.Println(err)
	}
}

func (app *application) AllSeasons(w http.ResponseWriter, r *http.Request) {
	seasons, err := app.DB.AllSeasons()
	if err != nil {
		fmt.Println(err)
		return
	}

	out, err := json.Marshal(seasons)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	_, err = w.Write(out)
	if err != nil {
		fmt.Println(err)
	}
}

func (app *application) AllTeams(w http.ResponseWriter, r *http.Request) {
	teams, err := app.DB.AllTeams()
	if err != nil {
		fmt.Println(err)
		return
	}

	out, err := json.Marshal(teams)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	_, err = w.Write(out)
	if err != nil {
		fmt.Println(err)
	}
}
