package models

import "time"

type Team struct {
	ID     int       `json:"id"`
	Name   string    `json:"name"`
	Since  time.Time `json:"since"`
	Logo   string    `json:"logo"`
	CityID int       `json:"city_id"`
}
