/**
 * Created by M.C on 2017/9/21.
 */
import jwt from "jwt-simple"

describe("Routes: Users", () => {
    "use strict";
    const Users = app.db.models.Users;
    const jwtSecret = app.libs.config.jwtSecret;
    let token;

    beforeEach(done => {
        Users
            .destroy({where: {}})
            .then(() => {
                return Users.create({
                    name: "Bond",
                    email: "Bond@mc.com",
                    password: "123456"
                });
            })
            .then(user => {
                token = jwt.encode({id: user.id}, jwtSecret);
                done();
            });
    });

    describe("GET /user", () => {
        describe("status 200", () => {
            it("returns an authenticated user", done => {
                request.get("/user")
                    .set("Authorization", `JWT ${token}`)
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.name).to.eql("Bond");
                        expect(res.body.email).to.eql("Bond@mc.com");
                        done(err);
                    });
            });
        });
    });

    describe("DELETE /user", () => {
        describe("status 204", () => {
            it("deletes an authenticated user", done => {
                request.delete("/user")
                    .set("Authorization", `JWT ${token}`)
                    .expect(204)
                    .end((err, res) => {
                        console.log(`err: ${err}`);
                        done(err);
                    });
            });
        });
    });

    describe("POST /users", () => {
        describe("status 200", () => {
            it("creates a new user", done => {
                request.post("/users")
                    .send({
                        name: "machao",
                        email: "machao@mc.com",
                        password: "123456"
                    })
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body.name).to.eql("machao");
                        expect(res.body.email).to.eql("machao@mc.com");
                        done(err);
                    });
            });
        });
    });
});