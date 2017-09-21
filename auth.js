/**
 * Created by M.C on 2017/9/19.
 */
import passport from "passport"
import {Strategy, ExtractJwt} from "passport-jwt"

module.exports = app => {
    "use strict";
    const Users = app.db.models.Users;
    const ctf = app.libs.config;
    const params = {
        secretOrKey: ctf.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    };

    const strategy = new Strategy(params, (payload, done) => {
        Users.findById(payload.id)
            .then(user => {
                if (user) {
                    return done(null, {
                        id: user.id,
                        email: user.email
                    });
                }
                return done(null, false);
            })
            .catch(error => done(error, null));
    });

    passport.use(strategy);

    console.log(`passport:  ${passport.initialize()}`);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate("jwt", ctf.jwtSession);
        }
    };
};