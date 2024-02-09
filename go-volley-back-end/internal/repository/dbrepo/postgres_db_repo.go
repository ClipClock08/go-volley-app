package dbrepo

import (
	"context"
	"database/sql"
	"time"

	"backend/internal/models"
)

type PostgresDBRepo struct {
	DB *sql.DB
}

const dbTimeout = 3 * time.Second

func (m *PostgresDBRepo) Connection() *sql.DB {
	return m.DB
}

func (m *PostgresDBRepo) AllSeasons() ([]*models.Season, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `select
		    id, title, coalesce(details, ''), start_year, end_year 
		from 
		    seasons
		order by 
		    title`

	rows, err := m.DB.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}

	defer func() { _ = rows.Close() }()

	var seasons []*models.Season

	for rows.Next() {
		var season models.Season
		err := rows.Scan(
			&season.ID,
			&season.Title,
			&season.Details,
			&season.StartYear,
			&season.EndYear,
		)
		if err != nil {
			return nil, err
		}

		seasons = append(seasons, &season)
	}

	return seasons, nil
}

func (m *PostgresDBRepo) AllTeams() ([]*models.Team, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `
		select
		    id, name, since, coalesce(logo, ''), city_id 
		from 
		    teams
		order by 
		    name`

	rows, err := m.DB.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}

	defer func() { _ = rows.Close() }()

	var teams []*models.Team

	for rows.Next() {
		var team models.Team
		err := rows.Scan(
			&team.ID,
			&team.Name,
			&team.Since,
			&team.Logo,
			&team.CityID,
		)
		if err != nil {
			return nil, err
		}

		teams = append(teams, &team)
	}

	return teams, nil
}
