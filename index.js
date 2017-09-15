/**
 * Created by M.C on 2017/9/14.
 */

import express from "express"
import consign from "consign"

const app = express();

/// 在使用include或者then的时候，是有顺序的，如果传入的参数是一个文件夹
/// 那么他会按照文件夹中文件的顺序进行加载
consign()
    .include("libs/config.js")
    .then("db.js")
    .then("libs/middlewares.js")
    .then("routers")
    .then("libs/boot.js")
    .into(app);



