/*
 * @Author: your name
 * @Date: 2020-07-22 17:21:25
 * @LastEditTime: 2020-07-22 20:16:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \photo\model\file.js
 */ 

//  用于直接操作相册和图片的模板
const fs = require('fs');

/**
 * @method: 读取某个文件夹的内容
 * @param {String}  dirName 被读取的文件夹名称或路径
 * @param {function} callback 回调函数
 */
exports.getDirs = function(dirName,callback){
    fs.readdir(dirName,function(err,files){
        callback(err,files);
    })
}

