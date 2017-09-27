/**
 * Created by M.C on 2017/9/15.
 */
import https from "https"
import fs from "fs"

module.exports = app => {
    "use strict";
    if (process.env.NODE_ENV !== "test") {

        const credentials = {
            key: fs.readFileSync("44885970_www.localhost.com.key", "utf8"),
            cert: fs.readFileSync("44885970_www.localhost.com.cert", "utf8")
        };

        app.db.sequelize.sync().done(() => {

            https.createServer(credentials, app)
                .listen(app.get("port"), () => {
                console.log(`NTask API - Port ${app.get("port")}`);
            });
        });
    }
};