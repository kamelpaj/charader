import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server here lmao :P')
});

module.exports = router;