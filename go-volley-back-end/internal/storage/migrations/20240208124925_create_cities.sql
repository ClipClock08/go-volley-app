-- +goose Up
-- +goose StatementBegin
CREATE TABLE cities
(
    id    SERIAL PRIMARY KEY,
    city VARCHAR(255)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS cities;
-- +goose StatementEnd
