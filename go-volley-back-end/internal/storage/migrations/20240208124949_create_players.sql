-- +goose Up
-- +goose StatementBegin
CREATE TABLE players
(
    id            SERIAL PRIMARY KEY,
    first_name    VARCHAR(255),
    last_name     VARCHAR(255),
    date_of_birth DATE,
    position_id   INT,
    height        INT,
    number        INT,
    photo         VARCHAR(255),
    team_id       INT,
    city_id       INT,
    FOREIGN KEY (position_id) REFERENCES positions (id),
    FOREIGN KEY (team_id) REFERENCES teams (id),
    FOREIGN KEY (city_id) REFERENCES cities (id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS players;
-- +goose StatementEnd
