-- +goose Up
-- +goose StatementBegin
CREATE TABLE positions
(
    id    SERIAL PRIMARY KEY,
    position VARCHAR(255)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS positions;
-- +goose StatementEnd
