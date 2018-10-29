# rewrite-passport
node passport 

git tag 1.0 // 建立本地 1.0 tag

git tag -d 1.0  // 删除本地 tag 1.0

git tag  -a 1.0 // -a 是引言

git tag -a -m 'nomal passport example' 1.0 // 加引言




##### 注册 

```$xslt
    
    curl -d '{"username":"222", "password":"222"}' -H "Content-Type: application/json" -X POST http://localhost:4000/users -v 
    
```

##### 登录

```$xslt

    curl -d '{"username":"222", "password":"222"}' -H "Content-Type: application/json" -X POST http://localhost:4000/api/auth -v 

```

#### 测试是否登录成功

````

curl  http://localhost:4000/api/auth -v -H 'Cookie: sid=s%3AvllJbxPx8dB6gi1h_3tliancboOKnyZc.j81o5D%2BFywpYpCDnEPbtwWc7Re%2F4MPiAlX7mx%2BSDot4;'

```

返回用户信息 
{"id":"5bd6c853e109b21bd827742d","username":"222"}


