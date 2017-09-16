/**
 * Created by M.C on 2017/9/15.
 */

module.exports = app => {
    "use strict";
    const Tasks = app.db.models.Tasks;

    app.route("/tasks")
        .get((req, res) => {
            Tasks.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .post((req, res) => {
        console.log(`req.body: ${req.body}`)
            Tasks.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });

    app.route("/tasks/:id")
        .get((req, res) => {
            Tasks.findOne({where: req.params})
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(412);
                    }
                })
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .put((req, res) => {
            Tasks.update(req.body, {where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .delete((req, res) => {
            Tasks.destroy({where: req.params})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
};