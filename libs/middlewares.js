/**
 * Created by M.C on 2017/9/15.
 */
import bodyParser from "body-parser"

module.exports = app => {
    "use strict";
    app.set("port", 3000);
    app.set("json spaces", 4);
    console.log(`err  ${JSON.stringify(app.auth)}`);
    app.use(bodyParser.json());
    // app.use(app.auth.initialize());
    console.log(`initialize: ${app.auth.initialize()}`);
    app.use((req, res, next) => {
        // console.log(`header: ${JSON.stringify(req.headers)}`);
        if (req.body && req.body.id) {
            delete req.body.id;
        }
        next();
    });
};
