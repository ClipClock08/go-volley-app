-- +goose Up
-- +goose StatementBegin
CREATE TABLE sets
(
    id              SERIAL PRIMARY KEY,
    match_id        INT,
    winning_team_id INT,
    team_1_score    INT,
    team_2_score    INT,
    FOREIGN KEY (match_id) REFERENCES matches (id),
    FOREIGN KEY (winning_team_id) REFERENCES teams (id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS sets;
-- +goose StatementEnd
