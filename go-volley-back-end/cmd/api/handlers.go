package main

import (
	"log"
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

	_ = app.writeJson(w, http.StatusOK, payload)
}

func (app *application) AllSeasons(w http.ResponseWriter, r *http.Request) {
	seasons, err := app.DB.AllSeasons()
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	_ = app.writeJson(w, http.StatusOK, seasons)
}

func (app *application) AllTeams(w http.ResponseWriter, r *http.Request) {
	teams, err := app.DB.AllTeams()
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	_ = app.writeJson(w, http.StatusOK, teams)
}

func (app *application) authenticate(w http.ResponseWriter, r *http.Request) {
	// read JSON payload
	var requestedPayload struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	err := app.readJSON(w, r, requestedPayload)
	if err != nil {
		app.errorJSON(w, err, http.StatusBadRequest)
		return
	}

	// create a jwt user
	u := jwtUser{
		ID:        1,
		FirstName: "Admin",
		LastName:  "User",
	}

	// generate token
	tokens, err := app.auth.GenerateTokenPair(&u)
	if err != nil {
		app.errorJSON(w, err)
		return
	}
	log.Println(tokens.Token)
	refreshCookie := app.auth.GetRefreshCookie(tokens.RefreshToken)
	http.SetCookie(w, refreshCookie)

	w.Write([]byte(tokens.Token))
}
