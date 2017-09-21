/**
 * Created by M.C on 2017/9/15.
 */

module.exports = app => {
    "use strict";
    if (process.env.NODE_ENV !== "test") {
        app.db.sequelize.sync().done(() => {
            app.listen(app.get("port"), () => {
                console.log(`NTask API - Port ${app.get("port")}`);
            });
        });
    }
};