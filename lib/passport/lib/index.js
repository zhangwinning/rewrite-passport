
const db = require('../../../models');

module.exports = function () {
    return (req, res, next) => {

        const { username, password } = req.body

        return db.User.findOne({ username })
            .then(user => {
                if (!user) {
                    req.user = null
                }
                return user.validatePassword(password)
                    .then(isMatch => {
                        if (isMatch) {
                            req.user = user
                            req.session.user = user
                        } else {
                            req.user = null
                        }
                        next()
                    });
            })
    }
}
