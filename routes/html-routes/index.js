const path = require("path");
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Habit, Counts, User } = require("../../models");

// Login page
router.get("/", (req, res) => {
  // user handlebar method to render html
  res.render("login");
});

// Homepage
router.get("/home", (req, res) => {
  res.render("home");
});

// My Habits page
router.get("/my-habits", (req, res) => {
  Habit.findAll({
    order: [["created_at", "DESC"]],
    attributes: [
      "id",
      "name",
      "type",
      "target_days",
      "created_at",
      [
        sequelize.literal(
          "(SELECT total_confirms FROM counts WHERE habit.id = counts.habit_id)"
        ),
        "total_count",
      ],
    ],
    include: [
      {
        model: Counts,
        attributes: ["total_confirms"],
      },
      {
        model: User,
        attributes: ["email"],
      },
    ],
  })
    .then((dbHabits) => {
      const habits = dbHabits.map((h) => h.dataValues);
      res.render("myhabits", { habits });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create New Habit page
router.get("/create-habit", (req, res) => {
  res.render("createhabits");
});

// wildcard route for any requests that do not exist
router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
