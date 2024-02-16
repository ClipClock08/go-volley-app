package models

import "time"

type Season struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Details   string `json:"details"`
	StartYear int    `json:"start_year"`
	EndYear   int    `json:"end_year"`
}

type Team struct {
	ID     int       `json:"id"`
	Name   string    `json:"name"`
	Since  time.Time `json:"since"`
	Logo   string    `json:"logo"`
	CityID int       `json:"city_id"`
}
