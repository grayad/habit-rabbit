const sequelize = require('../../config/connection');
const router = require('express').Router();
const { User, Habit, Counts } = require('../../models');

router.get('/', (req, res) => {
    Counts.findAll({
      attributes: [
        'id',
        'habit_id',
        'user_id',
        'total_confirms'
      ],
      include: [
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
    Counts.findOne({
        where: {
            id: req.params.id
        },
      attributes: [
        'id',
        'habit_id',
        'user_id',
        'total_confirms'
      ],
      include: [
        {
            model: User,
            attributes: ['email'],
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No count found with this id' });
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
    Counts.create({
      habit_id: req.body.habit_id,
      user_id: req.body.user_id,
      total_confirms: req.body.total_confirms
      })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// router.put('/upCount/:id', (req, res) => {
//     Counts.upCount(req.body, {Counts})
//     .then(updatedValue => {
//       if (!updatedValue) {
//         res.status(404).json({ message: 'Could not get updated value.' });
//         return;
//       }
//       return [ updatedValue, req.params.id ];
//     }).then(updateVals => {
//       Counts.update(
//         {
//           "total_confirms" : updateVals[0]
//         },
//         {
//           where: {
//             id: updateVals[1]
//           }
//       }).then(dbPostData => {
//         if (!dbPostData) {
//           res.status(404).json({ message: 'No count found with this id' });
//           return;
//         }
//         res.json(dbPostData);
//       }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//     })
// });


module.exports = router;