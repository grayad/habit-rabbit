const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Counts extends Model {};

Counts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    habit_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'habit',
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
    },
    total_confirms: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    // prev_confirm_date: {
    //     type: DataTypes.DATE,
    //     allowNull: true
    //     //This is date/time now, but should only update when habit confirmed.
    // },
    // prev_streak: {
    //     type: DataTypes.INTEGER
    //     //= current_streak just before current_streak resets to 0
    // },
    // current_streak: {
    //     type: DataTypes.INTEGER
    //     //Increments by 1 w/ each confirmation unles prev confirm date is > 1 day earlier, then it resets to 0
    // }
  },
  {
    // hooks: {

    // },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Counts'
  }
);

module.exports = Counts;