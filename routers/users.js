/**
 * Created by machao on 17/9/16.
 */
module.exports = app => {
    "use strict";
    const Users = app.db.models.Users;

    app.route("/user")
        .all(app.auth.authenticate())
        .get((req, res) => {
            Users.findById(req.user.id, {
                attributes: ["id", "name", "email"]
            })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .delete((req, res) => {
        console.log(`delete..........${req.user.id}`);
            Users.destroy({where: {id: req.user.id}})
                .then(result => {
                    console.log(`result: ${result}`);
                    return res.sendStatus(204);
                })
                .catch(error => {
                    console.log(`resultfsaddfsf`);
                    res.status(412).json({msg: error.message});
                });
        });

    app.post("/users", (req, res) => {
        Users.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });
};