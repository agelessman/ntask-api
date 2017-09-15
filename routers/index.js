/**
 * Created by M.C on 2017/9/15.
 */

module.exports = app => {
    "use strict";
    app.get("/", (req, res) => {
       res.json({status: "NTask API"});
    });
};