/**
 * Created by M.C on 2017/9/20.
 */
module.exports = app => {
    "use strict";
    const env = process.env.NODE_ENV;
    if (env) {
        return require(`./config.${env}.js`);
    }
    return require("./config.development.js");
};