-- +goose Up
-- +goose StatementBegin
CREATE TABLE positions
(
    id       SERIAL PRIMARY KEY,
    position VARCHAR(255)
);
INSERT INTO positions (position) VALUES ('Пасуючий');
INSERT INTO positions (position) VALUES ('Центральний блокуючий');
INSERT INTO positions (position) VALUES ('Діагональний');
INSERT INTO positions (position) VALUES ('Догравальник');
INSERT INTO positions (position) VALUES ('Ліберо');
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS positions;
-- +goose StatementEnd
