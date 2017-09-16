/**
 * Created by machao on 17/9/16.
 */
module.exports = app => {
    "use strict";
    const Users = app.db.models.Users;

    app.get("/users/:id", (req, res) => {
        Users.findById(req.params.id, {
            attributes: ["id", "name", "email"]
        })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });

    app.delete("/users/:id", (req, res) => {
        Users.destroy({where: req.params.id})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });

    app.post("/users/:id", (req, res) => {
        Users.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });
};