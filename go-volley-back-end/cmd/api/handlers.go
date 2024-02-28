package api

import (
	"backend/internal/repository"
	"errors"
	"github.com/golang-jwt/jwt/v5"
	"log"
	"net/http"
	"strconv"
)

type Application struct {
	DSN          string
	Domain       string
	DB           repository.DatabaseRepo
	Auth         Auth
	JWTSecret    string
	JWTIssuer    string
	JWTAudience  string
	CookieDomain string
}

func (app *Application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "Go Volley App up and running",
		Version: "0.0.1 Beta",
	}

	_ = app.writeJSON(w, http.StatusOK, payload)
}

func (app *Application) AllSeasons(w http.ResponseWriter, r *http.Request) {
	seasons, err := app.DB.AllSeasons()
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	_ = app.writeJSON(w, http.StatusOK, seasons)
}

func (app *Application) AllTeams(w http.ResponseWriter, r *http.Request) {
	teams, err := app.DB.AllTeams()
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	_ = app.writeJSON(w, http.StatusOK, teams)
}

func (app *Application) authenticate(w http.ResponseWriter, r *http.Request) {
	// read JSON payload
	var requestedPayload struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	err := app.readJSON(w, r, &requestedPayload)
	if err != nil {
		app.errorJSON(w, err, http.StatusBadRequest)
		return
	}

	// validate user against database
	user, err := app.DB.GetUserByEmail(requestedPayload.Email)
	if err != nil {
		app.errorJSON(w, errors.New("invalid credentials"))
		return
	}

	// check password
	valid, err := user.PasswordMatches(requestedPayload.Password)
	if err != nil || !valid {
		app.errorJSON(w, errors.New("password mismatch"))
		return
	}

	// create a jwt user
	u := jwtUser{
		ID:        user.ID,
		FirstName: user.FirstName,
		LastName:  user.LastName,
	}

	// generate token
	tokens, err := app.Auth.GenerateTokenPair(&u)
	if err != nil {
		app.errorJSON(w, err)
		return
	}
	log.Println(tokens.Token)
	refreshCookie := app.Auth.GetRefreshCookie(tokens.RefreshToken)
	http.SetCookie(w, refreshCookie)

	app.writeJSON(w, http.StatusAccepted, tokens)
}

func (app *Application) refreshToken(w http.ResponseWriter, r *http.Request) {
	for _, cookie := range r.Cookies() {
		if cookie.Name == app.Auth.CookieName {
			claims := &Claims{}
			refreshToken := cookie.Value

			_, err := jwt.ParseWithClaims(refreshToken, claims, func(token *jwt.Token) (interface{}, error) {
				return app.JWTSecret, nil
			})
			if err != nil {
				app.errorJSON(w, errors.New("unauthorized"), http.StatusUnauthorized)
				return
			}

			userID, err := strconv.Atoi(claims.Subject)
			if err != nil {
				app.errorJSON(w, errors.New("unknown user"), http.StatusUnauthorized)
				return
			}

			user, err := app.DB.GetUserByID(userID)
			if err != nil {
				app.errorJSON(w, errors.New("unknown user"), http.StatusUnauthorized)
				return
			}

			u := jwtUser{
				ID:        user.ID,
				FirstName: user.FirstName,
				LastName:  user.LastName,
			}

			tokenPairs, err := app.Auth.GenerateTokenPair(&u)
			if err != nil {
				app.errorJSON(w, errors.New("error generating token"), http.StatusUnauthorized)
				return
			}

			http.SetCookie(w, app.Auth.GetRefreshCookie(tokenPairs.RefreshToken))

			app.writeJSON(w, http.StatusOK, tokenPairs)
		}
	}
}

func (app *Application) logout(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, app.Auth.GeExpiredRefreshCookie())
	w.WriteHeader(http.StatusAccepted)
}

func (app *Application) SeasonsCatalog(w http.ResponseWriter, r *http.Request) {
	seasons, err := app.DB.AllSeasons()
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	_ = app.writeJSON(w, http.StatusOK, seasons)
}
