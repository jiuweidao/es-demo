
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

ALTER TABLE test ADD  new_con text;
-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back
ALTER TABLE test DROP COLUMN new_con;
