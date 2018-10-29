 # rewrite-passport

        1、注册 
            curl -d '{"username":"222", "password":"222"}' -H "Content-Type: application/json" -X POST http://localhost:4000/users -v 
        2、登录
            curl -d '{"username":"222", "password":"222"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/auth -v 
        3、是否登录成功
            Cookie 值是通过上面的登录 api 返回的
            curl  http://localhost:4000/api/auth -v -H 'Cookie: sid=s%3AvllJbxPx8dB6gi1h_3tliancboOKnyZc.j81o5D%2BFywpYpCDnEPbtwWc7Re%2F4MPiAlX7mx%2BSDot4;'
            返回用户信息
            {"id":"5bd6c853e109b21bd827742d","username":"222"}


