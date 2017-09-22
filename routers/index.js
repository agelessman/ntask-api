/**
 * Created by M.C on 2017/9/15.
 */

module.exports = app => {
    "use strict";
    /**
     * @api {get} / API Status
     * @apiGroup Status
     * @apiSuccess {String} status API Status' message
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {"status": "NTask API"}
     */
    app.get("/", (req, res) => {
       res.json({status: "NTask API"});
    });
};