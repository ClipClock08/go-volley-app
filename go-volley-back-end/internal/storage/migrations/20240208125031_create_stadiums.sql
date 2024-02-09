-- +goose Up
-- +goose StatementBegin
CREATE TABLE stadiums
(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(255),
    location VARCHAR(255)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS stadiums;
-- +goose StatementEnd
