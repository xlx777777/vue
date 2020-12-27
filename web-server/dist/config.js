"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require("path");

exports.default = {
	viewsPath: (0, _path.join)(__dirname, "../views"),
	publicPath: (0, _path.join)(__dirname, "../public"),
	uploadsGoodsPath: (0, _path.join)(__dirname, "../public/uploads"), // 上传的图片所放置的文件夹
	uploadsAvatarPath: (0, _path.join)(__dirname, "../public/avatar_uploads"), // 上传的头像所放置的文件夹
	port: parseInt(process.env.PORT, 10) || 3000, // 端口号

	host: 'localhost', // 数据库的地址
	user: 'root', // 账号
	password: 'root', // 密码
	database: 'web_shop', // 数据库名称

	secret: '123456', // session
	maxAge: 1000 * 60 * 60 * 6 // session保存6个小时
};