use habit_rabbit_db;

INSERT INTO user (email, password)
VALUES
    ('Ron', 'ron@gmail.com', 'pass1'),
    ('Mac', 'mac@gmail.com', 'pass2'),
    ('Tina', 'tina@gmail.com', 'pass3');


INSERT INTO habit (name, type, target_days, user_id, created_at, updated_at)
VALUES
    ("Ron's Habit 1", 'TypeA', '10', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ("Ron's Habit 2", 'TypeC', '11', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ("Mac's Habit 1", 'TypeA', '12', '2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ("Mac's Habit 2", 'TypeC', '13', '2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ("Mac's Habit 3", 'TypeA', '14', '2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ("Tina's Habit 1", 'TypeB', '15', '3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO counts (habit_id, user_id, total_confirms, prev_confirm_date, prev_streak, current_streak, created_at, updated_at)
VALUES
    ('1', '1', '5', '20200618', '5', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('2', '1', '4', '20120618', '5', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('3', '2', '3', '20120618', '5', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('4', '2', '2', '20120618', '5', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('5', '2', '1', '20120618', '5', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('6', '3', '0', '20120618', '5', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);