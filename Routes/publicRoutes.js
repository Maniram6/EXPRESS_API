// Importing Modules & Methods
const express = require('express');
const router = express.Router();

// Defining routes for /public

router.get('/', (req,res) => {
    res.status(200).send(`Welcome to Public Page`)
})

// Exporting Routes

module.exports = router;