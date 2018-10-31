
#### 第一阶段

其实 认证 就是服务器通过用户名、密码判断用户是否合法，返回相应用户信息即可。

1、具体实现逻辑是把上面逻辑抽象成一个中间件，在./lib/passport/index.js

```

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
                        } else {
                            req.user = null
                        }
                        next()
                    });
            })
    }
}

```
2、然后在服务启动后调用中间件 middleware/passport.js 
```
app.use(passport())
```

执行以下登录 curl 语句。
    
    curl -d '{"username":"222", "password":"222"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/auth -v 

发现返回的信息是正常的，但是没有 cookie 信息。

在 ./lib/passport/lib/index.js 18行添加 req.session.user = user 即可，这里是 express-session 中间价的作用。

再次调用上面 curl 语句是正常的。


