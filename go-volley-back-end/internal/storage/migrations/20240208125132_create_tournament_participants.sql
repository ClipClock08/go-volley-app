-- +goose Up
-- +goose StatementBegin
CREATE TABLE tournament_participants
(
    tournament_id INT,
    team_ID       INT,
    FOREIGN KEY (tournament_id) REFERENCES tournaments (id),
    FOREIGN KEY (team_id) REFERENCES teams (id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS tournament_participants;
-- +goose StatementEnd
