const bcrypt = require('bcryptjs');


exports.getLogin = (req, res) => {
    res.render('login');
};

exports.login = (req, res) => {
    // Your login logic here
};

exports.getSignup = (req, res) => {
    
    res.render('signup');
};

exports.signup = (req, res) => {
    // Your signup logic here
    try {
        const { email, password } = req.body;
        const user = new User({ email, password });
        user.save();
        res.redirect('/');
    } catch (error) {
        res.redirect('/signup');
    }
};

exports.getLogout = (req, res) => {
    res.render('logout');
};

exports.logout = (req, res) => {
    // Your logout logic here
    try {
        req.logout();
        res.redirect('/');
    } catch (error) {
        res.redirect('/');
    }
    res.redirect('/');
};