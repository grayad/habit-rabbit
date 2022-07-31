const sequelize = require('../../config/connection');
const router = require('express').Router();
const { User, Habit, Counts } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  console.log('habit find all session print');
  console.log(req.session);

    Habit.findAll({
      order: [['created_at', 'DESC']],
      attributes: [
        'id',
        'name',
        'type',
        'target_days',
        'user_id',
        'created_at',
        // [sequelize.literal('(SELECT total_confirms FROM counts WHERE habit.id = counts.habit_id)'), 'total_count'],
      ],
      include: [
        // {
        //     model: Counts,
        //     attributes: [ 'total_confirms'],
        // },
        {
            model: User,
            attributes: ['name'],
        }
      ]
     }).then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
  console.log('habit find one session print');
  console.log(req.session);

    Habit.findAll({
        where: {
            id: req.params.id
        },
      attributes: [
        'id',
        'name',
        'type',
        'target_days',
        'user_id',
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
          res.status(404).json({ message: 'No habits found with this user_id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});

router.get('/name/:name', (req, res) => {
    Habit.findOne({
        where: {
            name: req.params.name
        },
      attributes: [ 'id' ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No habit found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});


router.post('/',/* withAuth,*/ (req, res) => {
    Habit.create({
      name: req.body.name,
      type: req.body.type,
      target_days: req.body.target_days,
      user_id: req.body.user_id
    }, { User })
      .then(dbPostData =>{ res.json(dbPostData)
        console.log('from habit create:')
        console.log(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;