/**
 * Created by M.C on 2017/9/15.
 */
import bodyParser from "body-parser"

module.exports = app => {
    "use strict";
    app.set("port", 3000);
    app.set("json spaces", 4);

    app.use(bodyParser.json());
    app.use((req, res, next) => {
        if (req.body && req.body.id) {
            delete req.body.id;
        }
        next();
    });
};
