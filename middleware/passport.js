const session = require('express-session');
const cookieparser = require('cookie-parser');

// const passport = require('../lib/passport/lib')

// export a function that receives the Express app we will configure for Passport
module.exports = (app) => {
    // these two middlewares are required to make passport work with sessions
    // sessions are optional, but an easy solution to keeping users
    // logged in until they log out.
    app.use(cookieparser());
    app.use(session({
        // this should be changed to something cryptographically secure for production
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        // automatically extends the session age on each request. useful if you want
        // the user's activity to extend their session. If you want an absolute session
        // expiration, set to false
        rolling: true,
        name: 'sid', // don't use the default session cookie name
        // set your options for the session cookie
        cookie: {
            httpOnly: true,
            // the duration in milliseconds that the cookie is valid
            maxAge: 20 * 60 * 1000, // 20 minutes
            // recommended you use this setting in production if you have a well-known domain you want to restrict the cookies to.
            // domain: 'your.domain.com',
            // recommended you use this setting in production if your site is published using HTTPS
            // secure: true,
        }
    }));

    // app.use(passport())
}
