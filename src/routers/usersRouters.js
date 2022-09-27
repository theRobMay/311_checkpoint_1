const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// importing Controllers
const {
    getUsers,
    getUsersByID,
    postNewUser,
    updateUser,
    deleteUser,
} = require('../controllers/usersControllers.js');

router.get('/', (req, res) =>
    res.send('<h1>Placeholder "static" element</h1>')
);

router.get('/users', getUsers);

router.get('/users/:id', getUsersByID);

router.post('/users', postNewUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

module.exports = router;