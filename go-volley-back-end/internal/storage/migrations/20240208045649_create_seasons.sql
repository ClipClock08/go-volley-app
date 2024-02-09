-- +goose Up
-- +goose StatementBegin
CREATE TABLE seasons
(
    id         SERIAL PRIMARY KEY,
    start_year INT,
    end_year   INT,
    title      VARCHAR(255),
    details    VARCHAR(255)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS seasons;
-- +goose StatementEnd
