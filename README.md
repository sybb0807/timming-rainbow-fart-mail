# timming-rainbow-fart-mail

Regularly send rainbow fart emails to others.

🌈 定时给别人发邮件吹彩虹屁，邮件内容未来自[shadiao]('xxx/timming-rainbow-fart-mail:latest')，目前设置的定时规则是每天早上 9：30。

> 默认是用 QQ 邮箱发送，如需其他邮箱发件，需要修改代码中的`host`属性值

## 开发指南

### 环境

1. 安装 Node.js 环境，最低版本要求 12.11.0，并安装 yarn 包管理
2. 安装 Docker

### 准备工作

1. 拉取代码，并`yarn install`
2. 把 `.env.template` 复制一份命名为 `.env`
3. 打开`.env`文件，修改对应的环境变量，参考下面的`环境变量说明`
4. 运行 `yarn dev`，开启。后续修改代码后，前端会自动重载，无需手动重启

### 环境变量说明

- `SENDER_MAIL`: 发送邮件的邮箱地址
- `NICKNAME`: 邮件中显示的发件人名称
- `ACCEPT_MAIL`: 收件人的邮箱地址
- `PASS_KEY`: 发件人的邮箱授权码，怎么获取授权码可参考百度

## 部署

💻 改完之后本地试一下没什么就可以准备部署到服务器啦

### 服务器环境

1. 安装 Node.js 环境，最低版本要求 12.11.0，并安装 yarn 包管理
2. 安装 Docker

### 本地打包和上传镜像

1. 找到 `Dockerfile` 修改里面的环境变量（还是那几个环境变量）
2. 执行`docker build -t xxx/timming-rainbow-fart-mail:latest .`，`xxx`表示你的镜像仓库，自建的或者是公共的都可
3. 执行`docker push xxx/timming-rainbow-fart-mail:latest`, 把打包好的镜像 push 到仓库

### 服务器跑服务

1. 进入服务器后`docker pull xxx/timming-rainbow-fart-mail:latest`拉取镜像
2. 运行服务：`docker run xxx/timming-rainbow-fart-mail:latest`

好了，可以定时吹 🌈 屁了，快去看看对方有没有很开心 🤭

> 偷懒了 代码全写在了 app.js 里 😓
