-- +goose Up
-- +goose StatementBegin
CREATE TABLE tournaments
(
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(255),
    date      DATE,
    host_city INT,
    winner    INT,
    FOREIGN KEY (winner) REFERENCES teams (id),
    FOREIGN KEY (host_city) REFERENCES cities (id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS tournaments;
-- +goose StatementEnd
