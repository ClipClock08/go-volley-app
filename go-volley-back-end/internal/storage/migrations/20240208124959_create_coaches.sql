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
INSERT INTO coaches (first_name, last_name, surname, team_id)
VALUES ('Іван', 'Іванов', 'Іванович', 1);
INSERT INTO coaches (first_name, last_name, surname, team_id)
VALUES ('Іван2', 'Іванов', 'Іванович', 2);
INSERT INTO coaches (first_name, last_name, surname, team_id)
VALUES ('Іван3', 'Іванов', 'Іванович', 3);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS coaches;
-- +goose StatementEnd
