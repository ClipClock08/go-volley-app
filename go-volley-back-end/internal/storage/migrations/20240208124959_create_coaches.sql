-- +goose Up
-- +goose StatementBegin
CREATE TABLE coaches
(
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name  VARCHAR(255),
    surname    VARCHAR(255),
    team_id    INT,
    FOREIGN KEY (team_id) REFERENCES teams (id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS coaches;
-- +goose StatementEnd
