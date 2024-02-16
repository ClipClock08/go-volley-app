package repository

import (
	"database/sql"

	"backend/internal/models"
)

type DatabaseRepo interface {
	Connection() *sql.DB
	AllSeasons() ([]*models.Season, error)
	AllTeams() ([]*models.Team, error)
	GetUserByEmail(email string) (*models.User, error)
	GetUserByID(id int) (*models.User, error)
}
