/*
 * @Author: your name
 * @Date: 2020-07-28 16:49:26
 * @LastEditTime: 2020-07-28 19:23:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \photo\model\db.js
 */ 

const mongoose = require('mongoose');
// 创建dirSchema和picSchema
var dirSchema = new mongoose.Schema({
    name:String
})
var picSchema = new mongoose.Schema({
    name:String,
    dir:String
})
// 创建对应的Model
var Dir = mongoose.model('dir',dirSchema);
var Pic = mongoose.model('pic',dirSchema);

// 连接数据库
const url = 'mongodb://localhost:27017/web';
const opt = {useNewUrlParser:true,useUnifiedTopology:true};

mongoose.connect(url,opt);






module.exports = {
    Dir:Dir,
    Pic:Pic
}