## 演示地址
https://saltfish666.github.io

## 思路

用GitPage托管静态资源，repo的issues来存储博客内容和评论

整个项目有三个界面，首页，文章页面，写/编辑文章页面

创建一个repo，这个repo的issues用来存储博客内容

## 需要额外的服务器吗
因为GitHubAPI限制，只有登录后的用户才能正常使用，这一步必须得有自己的VPS，
未登录的IP每小时只能访问60次，登录的用户每小时可以使用5000次GitHubAPI

当然，如果你只打算自己一个人看自己的博客或者自是本地构建，不需要VPS

## 如何使用

- fork本项目
- 将index.html第41行的
```
var conf = {
            repositoryOwner:"gitblog666",
            repositoryName:"program",
            client_id:"66212aa2c8c2293b9020",
            token:""
        }
```
数据改成自己的内容
比如说我打算用 https://github.com/gitblog666/program/issues 存储自己的博客，那么
我的 repositoryOwner 就是 "gitblog666"


如果要提供登录功能，可以在  https://github.com/settings/installations 申请一个APP，服务端的代码可以参考
https://github.com/saltfish666/OAuthAPI

如果你没有VPS，你就可以在 https://github.com/settings/tokens 申请自己的token，填写在 `conf.token`。
不过要注意，这个token不要全commit在github，写个代码逻辑让自己在使用时动态填写。同时其他人在访问你的博客依然会受到
GitHUbAPI限制


这样你就可以在对应的GitPage看到相应的内容了


看、写、改、评论，麻雀虽小，五脏俱全。就是界面太丑，还有很多API没有利用到，慢慢再丰富。