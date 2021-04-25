const userCtrl = {}

userCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');

};

userCtrl.signUp = (req, res) => {
    res.send('signup');
};

userCtrl.renderSignInForm = (req, res) => {
    res.render('users/signin');
};

userCtrl.signIn = (req, res) => {
    res.send('signin');
};

userCtrl.logOut = (req, res) => {
    res.send('logout');
};

module.exports = userCtrl;