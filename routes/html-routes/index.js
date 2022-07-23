const path = require('path');
const router = require('express').Router();


// Homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/home.html'))
});

// Login page
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

// My Habits page
router.get('/my-habits', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/myhabits.html'))
});

// Create New Habit page
router.get('/create-habit', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/createhabits.html'))
});

// wildcard route for any requests that do not exist
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/home.html'));
});

module.exports=router;