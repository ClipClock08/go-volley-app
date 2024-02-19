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
INSERT INTO teams (name, since, logo, city_id)
VALUES ('Valky Team', '2021-01-01', '', 1);
INSERT INTO teams (name, since, logo, city_id)
VALUES ('StM', '2021-01-01', '', 3);
INSERT INTO teams (name, since, logo, city_id)
VALUES ('Шарівка', '2021-01-01', '', 2);
INSERT INTO teams (name, since, logo, city_id)
VALUES ('За Валки', '2021-01-01', '', 1);
INSERT INTO teams (name, since, logo, city_id)
VALUES ('Авангард', '2021-01-01', '', 6);
INSERT INTO teams (name, since, logo, city_id)
VALUES ('Коломак', '2021-01-01', '', 4);
INSERT INTO teams (name, since, logo, city_id)
VALUES ('Відродження', '2021-01-01', '', 8);
INSERT INTO teams (name, since, logo, city_id)
VALUES ('ДЮСШ', '2021-01-01', '', 7);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS teams;
-- +goose StatementEnd
