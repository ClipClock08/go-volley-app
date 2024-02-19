-- +goose Up
-- +goose StatementBegin
CREATE TABLE seasons
(
    id         SERIAL PRIMARY KEY,
    title      VARCHAR(255),
    details    VARCHAR(255),
    start_year INT,
    end_year   INT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
INSERT INTO seasons (title, details, start_year, end_year)
VALUES ('Чемпіонат Валківських громад', 'Змагання з класичного волейболу', 2023, 2024);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS seasons;
-- +goose StatementEnd
