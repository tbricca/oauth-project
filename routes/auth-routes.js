// creating an instance of the router 
const router = require('express').Router();

// Auth Login
router.get('/login', (req, res) => {
    res.render('login');
});

// Auth Logout
router.get('/logout', (req, res) => {
    // handle w/ passport
    res.send('logging out');
});


// Auth w/ Google
router.get('/google', (req, res) => {
    // handle with passport
    res.send('Logging in with Google');
});

module.exports = router;