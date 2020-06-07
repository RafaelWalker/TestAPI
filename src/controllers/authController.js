const express = require('express');

const User = requires ('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = User.create(req.body);

        return res.send({ user });
    } catch (err) {
        return res.status(408).send ({ error: 'Erro no Registro' });
    }
});

module.exports = app => app.use('/auth', router);