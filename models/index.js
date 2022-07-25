const User = require('./User');
const Habit = require('./Habit');
const Counts = require('./Counts.js');

User.hasMany(Habit, {
    foreignKey: 'user_id'
});

User.belongsToMany(Habit, {
    through: Counts,
    foreignKey: 'user_id'
});

User.hasMany(Counts, {
    foreignKey: 'user_id'
});

Habit.belongsTo(User, {
    foreignKey: 'user_id'
});

Habit.belongsTo(Counts, {
    foreignKey: 'habit_id'
});

Counts.belongsTo(Habit, {
    as: 'total_counts',
    foreignKey: 'habit_id'
});

Counts.belongsTo(User, {
    foreignKey: 'user_id'
});





module.exports = { User, Habit, Counts };