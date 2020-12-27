# webshop

> A  vue & node  Project     PC端网上商城

#### 架构

- 前端：vue全家桶
- 后端： node:express框架
- 数据库：MySQL

#### 基本功能

##### 普通用户

- 注册、登录（图形验证码）
- 定位 （腾讯地图定位功能）、自主选择所在城市
- 商品
  - 分类
  - 简单展示商品
  - 查看商品详情
  - 商品评论
- 分页功能
- 购物车功能
  - 加入购物车
  - 购物车商品数量增减
  - 清空购物车
  - 商品结算
- 多关键词模糊搜索商品 （关键词需为商品名称）
- 用户个人中心
  + 修改用户信息 （头像、昵称、简介...）
  + 修改手机号
  + 修改密码

##### 管理员

- 登录（固定账号密码都是：admin）
- 查看所有用户
- 查看数据库商品信息
- 商品上架（添加商品）
- 删除/修改商品
- 分页功能


##### 环境搭建
- node 官网下载，一直点击下一步安装
- cmd 输入node -v 出现版本号14.xx.x即成功
- mysql 解压phpStudy.rar 双击打开phpStudy.exe
- 启动mysql,点击mysql管理器-mysql-front 能登录即成功
- 初始密码是root



#### 运行

> 项目后端服务器是基于node、MySQL开发，运行前请确认系统已安装相关应用 

- `git clone`

##### 服务器端

+ 确认是否全局安装`nodemon`

+ 若无安装：
  + `npm install -g cnpm --registry=https://registry.npm.taobao.org` 安装cnpm
  + `cnpm i -g nodemon`
  

  + 或修改`web-server/package.json`

    ```javascript
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "set PORT=3000 && node main.js",
        "build": "babel src -d dist",
        "start": "node dist/app.js"
      },
    ```

+ `cd web-server`
+ `mkdir -p public/uploads`  新建uploads文件夹保存商品图片 (web-server文件夹下查看是否存在public/uploads,没有就新建，有就不管了)
+ 将`web-server`文件夹下的`web_shop.sql`导入`MySQL`数据库中
+ `cnpm install` 安装依赖
+ 修改`web-server/src/config.js`文件，此文件记录项目的全局变量，在文件中找到`password`、`database`、`user`属性，根据你的数据库信息修改它们的值
+ `npm run dev` 在本地运行，启动服务器

##### 客户端

- `cd web-client`
- `mkdir static` 新建static文件夹，防止报错(在web-client下新建static文件夹)
- `cnpm install` 安装依赖
- `npm run dev` 在本地运行
- 接着就可以在`http://localhost:8080`下访问到该项目



##### 后续启动项目
1、启动mysql
2、在web-server文件夹下运行cmd：npm run dev
3、在web-client文件夹下运行cmd：npm run dev




##### 目录说明
web-client  前端项目
  build webpack打包相关配置  cli3自动生成的，不用管
  config webpack打包相关配置  cli3自动生成的，不用管  具体看()[https://www.cnblogs.com/donve/p/11162227.html]
  node_modules 项目依赖
  src 主要资源路径
    api 请求接口相关
      ajax.js 统一封装了ajax请求
      index.js  每个api接口都在这里
  common 一些全局的字体、图片跟样式
  components 可复用的组件
    HeaderSearch 首页那个搜索框
    HeaderTop 首页最顶上的那个
    ProductItem 一个商品项（如首页分类下面的那个）
  config 通用的js
    filters.js  封装了一些常用的过滤器
    utils.js 封装了一些常用的js方法
  pages 页面文件
    Admin 管理后台相关页面
    AdminLogin 管理员登录
    Goods 商品详情页
    Home 首页
    Login 登录
    Me 个人中心
    Search 搜索
    SearchDetail 搜索结果为空页面
    Shop 购物车
  router vue路由控制
    index.js 所有的页面路径都要在这里配置
  store vue的状态管理 (这个项目主要是做临时存储用,临时存储是vuex的功能之一)
    主要存了什么的话，看state.js
    具体看这里()[https://vuex.vuejs.org/zh/]
  static 防止报错用的，因为一个标准的vue文件里面就需要有这个文件夹


web-server 服务端项目
  db 数据库配置
  node_modules 项目依赖
  public 公用的项目文件
  routes 后端路由
    index.js 后端的主要代码,每一个方法 如router.get("/api/homecasual",()=>{})对应前端的一个api,方法里面执行了sql语句对数据库进行操作，把相应的数据返回给前端
  src 
    app.js 后端入口文件
    config 项目配置文件
  util 后端工具类
    sms_util.js 短信验证码工具类 , 大部分被代码都没用到，太多地方用到了
  views 服务端渲染用到的视图文件
    本项目没有用到服务端渲染，这是创建后端项目自带的文件
  




     