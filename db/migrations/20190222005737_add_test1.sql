-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

CREATE TABLE IF NOT EXISTS test1 (
	id serial,
	con text
);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

DROP TABLE test1;