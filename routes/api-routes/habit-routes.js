const sequelize = require('../../config/connection');
const router = require('express').Router();
const { User, Habit, Counts } = require('../../models');

router.get('/', (req, res) => {
    Habit.findAll({
      order: [['created_at', 'DESC']],
      attributes: [
        'id',
        'name',
        'type',
        'target_days',
        'created_at',
        [sequelize.literal('(SELECT total_confirms FROM counts WHERE habit.id = counts.habit_id)'), 'total_count'],
      ],
      include: [
        {
            model: Counts,
            attributes: [ 'total_confirms'],
        },
        {
            model: User,
            attributes: ['email'],
        }
      ]
     }).then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
    Habit.findOne({
        where: {
            id: req.params.id
        },
      attributes: [
        'id',
        'name',
        'type',
        'target_days',
        'created_at',
        [sequelize.literal('(SELECT total_confirms FROM counts WHERE habit.id = counts.habit_id)'), 'total_count'],
      ],
      include: [
        {
            model: Counts,
            attributes: [ 'total_confirms'],
        },
        {
            model: User,
            attributes: ['email'],
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});

router.post('/', (req, res) => {
    Habit.create({
      name: req.body.name,
      type: req.body.type,
      target_days: req.body.target_days,
      user_id: req.body.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;