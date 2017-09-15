/**
 * Created by M.C on 2017/9/15.
 */

module.exports = app => {
    "use strict";
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`NTask API - Port ${app.get("port")}`);
        });
    });
};