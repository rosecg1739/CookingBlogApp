const User = require('../models/user')
const bcrypt = require('bcrypt')

// Assuming you have a User model


// define my getlogin route
// define my postlogin route

// define my getlogout route

// define my postlogout route




exports.getLogin = (req, res) => {
    const { username, loggedIn, userId } = req.session;

    res.render('users/login', { username, loggedIn, userId });
}

exports.login = async (req, res) => {
    'index', { username: req.session.username, loggedIn: req.session.loggedIn, userId: req.session.userId }
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            // Passwords match
            res.redirect('/');
        } else {
            // Passwords don't match
            res.send('Invalid username or password');
        }
    }
    catch (error) {
        console.error(error);
        res.send(`An error occurred: ` + error.message);
    }
}

exports.getSignup = (req, res) => {
    const { username, loggedIn, userId } = req.session;

    res.render('users/signup', { username, loggedIn, userId });
}

exports.signup = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({ ...req.body, password: hashedPassword });
        await newUser.save();
        res.redirect('/login');
    }
    catch (error) {
        console.error(error);
        res.send(`An error occurred: ` + error.message);
    }
}

exports.getLogout = (req, res) => {
    const { username, loggedIn, userId } = req.session;

    res.render('users/logout', { username, loggedIn, userId });
}

exports.logout = async (req, res) => {
    try {
        await req.session.destroy();
        res.redirect('/login');
    }
    catch (error) {
        console.error(error);
        res.send(`An error occurred: ` + error.message);
    }
}

exports.getProfile = async (req, res) => {
    // Assuming the user's ID is stored in the session
    const userId = req.session.userId;

    try {
        // Find the user in the database
        const user = await User.findById(userId);
        
        // Render the profile page with the user's data
        res.render('profile', { user: user });
    } catch (err) {
        console.error(err);
        res.send(`An error occurred: ` + err.message);
    }
}

exports.profile  = async (req, res) => {
    try {
        // Assuming the user's ID is stored in the session
        const userId = req.session.userId;

        // Find the user in the database and update their data
        await User.findByIdAndUpdate(userId, req.body);

        // Redirect the user to their profile page
        res.redirect('/profile');
    } catch (error) {
        console.error(error);
        res.send(`An error occurred: ` + error.message);
    }
}

exports.getEditProfile = async (req, res) => {
    // Assuming the user's ID is stored in the session
    const userId = req.session.userId;

    try {
        // Find the user in the database
        const user = await User.findById(userId);
        
        // Render the editProfile page with the user's data
        res.render('editProfile', { user: user });
    } catch (err) {
        console.error(err);
        res.send(`An error occurred: ` + err.message);
    }
}

exports.editProfile = async (req, res) => {
    try {
        // Assuming the user's ID is stored in the session
        const userId = req.session.userId;

        // Find the user in the database and update their data
        await User.findByIdAndUpdate(userId, req.body);

        // Redirect the user to their profile page
        res.redirect('/profile');
    } catch (error) {
        console.error(error);
        res.send(`An error occurred: ` + error.message);
    }
}

exports.deleteAccount = async (req, res) => {
    try {
        // Assuming the user's ID is stored in the session
        const userId = req.session.userId;

        // Delete the user from the database
        await User.findByIdAndDelete(userId);

        // Destroy the session and redirect the user to the login page
        req.session.destroy(() => {
            res.redirect('/login');
        });
    } catch (error) {
        console.error(error);
        res.send(`An error occurred: ` + error.message);
    }
}




