/**
 * Created by M.C on 2017/9/15.
 */

module.exports = app => {
    "use strict";
    const Tasks = app.db.models.Tasks;
    app.get("/tasks", (req, res) => {
        Tasks.findAll({}).then(tasks => {
            res.json({tasks: tasks});
        });
    });
};