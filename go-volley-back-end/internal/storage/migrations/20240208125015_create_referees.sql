-- +goose Up
-- +goose StatementBegin
CREATE TABLE referees
(
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name  VARCHAR(255),
    surname    VARCHAR(255),
    city_id    INT,
    FOREIGN KEY (city_id) REFERENCES cities (id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS referees;
-- +goose StatementEnd
