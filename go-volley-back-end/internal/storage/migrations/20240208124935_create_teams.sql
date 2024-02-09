-- +goose Up
-- +goose StatementBegin
CREATE TABLE teams
(
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(255),
    since   DATE,
    logo    VARCHAR(255),
    city_id INT,
    FOREIGN KEY (city_id) REFERENCES cities (id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS teams;
-- +goose StatementEnd
