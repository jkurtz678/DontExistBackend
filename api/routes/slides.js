const express = require('express');
const router = express.Router();
const slides = require('../../data/PropulsionSlides');

router.get('/', (req, res, next) => {
    res.status(200).json(slides).catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;
