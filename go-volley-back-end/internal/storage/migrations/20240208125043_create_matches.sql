-- +goose Up
-- +goose StatementBegin
CREATE TABLE matches
(
    id         SERIAL PRIMARY KEY,
    date       TIMESTAMP,
    team_1_id  INT,
    team_2_id  INT,
    winner_id  INT,
    season_id  INT,
    stadium_id INT,
    referee_id INT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),

    FOREIGN KEY (team_1_id) REFERENCES teams (id),
    FOREIGN KEY (team_2_id) REFERENCES teams (id),
    FOREIGN KEY (winner_id) REFERENCES teams (id),
    FOREIGN KEY (season_id) REFERENCES seasons (id),
    FOREIGN KEY (stadium_id) REFERENCES stadiums (id),
    FOREIGN KEY (referee_id) REFERENCES referees (id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS matches;
-- +goose StatementEnd
