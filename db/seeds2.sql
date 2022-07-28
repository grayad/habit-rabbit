use habit_rabbit_db;

INSERT INTO user (email, password)
VALUES
    ('tina@gmail.com', 'password');


INSERT INTO habit (name, type, target_days, user_id, created_at, updated_at)
VALUES
    ('Run', 'Health', '15', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
    ('Code', 'Education', '7', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
    ('Make Bed', 'Clean', '10', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO counts (habit_id, user_id, total_confirms, prev_confirm_date, prev_streak, current_streak, created_at, updated_at)
VALUES
    ('1', '1', '5', '20200618', '5', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('2', '1', '4', '20120618', '5', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('3', '1', '3', '20120618', '5', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),