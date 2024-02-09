package repository

import (
	"backend/internal/models"
	"database/sql"
)

type DatabaseRepo interface {
	Connection() *sql.DB
	AllSeasons() ([]*models.Season, error)
	AllTeams() ([]*models.Team, error)
}
