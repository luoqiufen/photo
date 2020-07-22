/*
 * @Author: your name
 * @Date: 2020-07-22 16:20:47
 * @LastEditTime: 2020-07-22 19:14:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \photo\route\dir.js
 */

// 创建相册相关的路由
const express = require('express');
const router = express.Router();
const file = require('../model/file.js');


// 处理 /dir请求,显示服务器上所有的相册
router.get('/', function (req, res) {
    // 将uploads里面的文件夹显示出来
    file.getDirs('./uploads', function (err, files) {
        if (err) {
            console.log(err);
            res.render('error', { errMsg: '打开相册失败' });
            return;
        }
        // 成功
        res.send(files)
    });
})

// 暴露路由
module.exports = router