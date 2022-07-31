const router = require("express").Router();
const sequelize = require("../config/connection");
const { Habit, Counts, User } = require("../models");

//Login page
router.get("/", (req, res) => {
  console.log('login session print');
  console.log(req.session);
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

//Homepage
router.get("/home", (req, res) => {
  console.log('/home session print');
  console.log(req.session);

  res.render("home", {
    loggedIn: req.session.loggedIn
  });
});


// My Habits page
router.get("/my-habits", (req, res) => {
  console.log('my-habits session print');
  console.log(req.session);

  Habit.findAll({
    order: [["created_at", "DESC"]],
    // where : { user_id: req.session.user },
    attributes: [
      "id",
      "name",
      "type",
      "target_days",
      "created_at",
      // [
      //   sequelize.literal(
      //     "(SELECT total_confirms FROM counts WHERE habit.id = counts.habit_id)"
      //   ),
      //   "total_count",
      // ],
    ],
    include: [
      // {
      //   model: Counts,
      //   attributes: ["total_confirms"],
      // },
      {
        model: User,
        attributes: ["name"],
      },
    ],
  })
    .then((dbHabits) => {
      const habits = dbHabits.map((h) => h.dataValues);
      // const habits = dbHabits.map(h => h.get({ plain: true }));
      res.render("myhabits", { habits, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create New Habit page
router.get("/create-habit", (req, res) => {
  console.log('create-habit session print');
  console.log(req.session);

  res.render("createhabits");
});

// wildcard route for any requests that do not exist
router.get("*", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
