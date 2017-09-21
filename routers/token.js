/**
 * Created by M.C on 2017/9/19.
 */
import jwt from "jwt-simple"

module.exports = app => {
    "use strict";
    const cfg = app.libs.config;
    const Users = app.db.models.Users;

    app.post("/token", (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        if (email && password) {
            Users.findOne({where: {email: email}})
                .then(user => {
                    if (Users.isPassword(user.password, password)) {
                        const payload = {id: user.id};
                        res.json({
                            token: jwt.encode(payload, cfg.jwtSecret)
                        });
                    } else {
                        res.sendStatus(401);
                    }
                })
                .catch(error => res.sendStatus(401));
        } else {
            res.sendStatus(401);
        }
    });
};