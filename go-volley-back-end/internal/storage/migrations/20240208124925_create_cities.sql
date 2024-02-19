-- +goose Up
-- +goose StatementBegin
CREATE TABLE cities
(
    id    SERIAL PRIMARY KEY,
    city VARCHAR(255)
);
-- +goose StatementEnd
INSERT INTO cities (city) VALUES ('Валки');
INSERT INTO cities (city) VALUES ('Шарівка');
INSERT INTO cities (city) VALUES ('Старий Мерчик');
INSERT INTO cities (city) VALUES ('Коломак');
INSERT INTO cities (city) VALUES ('Краснокутськ');
INSERT INTO cities (city) VALUES ('Люботин');
INSERT INTO cities (city) VALUES ('Богодухів');
INSERT INTO cities (city) VALUES ('Резуненкове');
INSERT INTO cities (city) VALUES ('Сидоренкове');
INSERT INTO cities (city) VALUES ('Мельникове');
-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS cities;
-- +goose StatementEnd
