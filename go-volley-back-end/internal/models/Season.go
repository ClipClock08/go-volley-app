package models

type Season struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Details   string `json:"details"`
	StartYear int    `json:"start_year"`
	EndYear   int    `json:"end_year"`
}
