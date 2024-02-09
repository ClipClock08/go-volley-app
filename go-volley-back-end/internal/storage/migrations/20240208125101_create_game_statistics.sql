-- +goose Up
-- +goose StatementBegin
CREATE TABLE game_statistics
(
    id                      INT,
    match_id                INT,
    player_id               INT,
    number_of_attacks       INT,
    number_of_points_Scored INT,
    number_of_points_Missed INT,
    number_of_blocks        INT,
    FOREIGN KEY (match_id) REFERENCES matches (id),
    FOREIGN KEY (player_id) REFERENCES players (id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS game_statistics;
-- +goose StatementEnd
