/**
 * Created by M.C on 2017/9/20.
 */
describe("Routes: Token", () => {
    "use strict";
    const Users = app.db.models.Users;

    describe("POST /token", () => {
        beforeEach(done => {
            Users
                .destroy({where: {}})
                .then(() => {
                    Users.create({
                        name: "James",
                        email: "James@mc.com",
                        password: "123456"
                    });
                })
                .then(() => done());
        });

        describe("status 200", () => {
            it("returns authenticated user token", done => {
                request.post("/token")
                    .send({
                        email: "James@mc.com",
                        password: "123456"
                    })
                    .expect(200)
                    .end((err, res) => {
                        expect(res.body).to.include.keys("token");
                        done(err);
                    });
            });
        });


        describe("status 401", () => {
            it("throws error when password is incorrect", done => {
                request.post("/token")
                    .send({
                        email: "James@mc.com",
                        password: "wrong_password"
                    })
                    .expect(401)
                    .end((err, res) => {
                        done(err);
                    });
            });

            it("throws error when email not exist", done => {
                request.post("/token")
                    .send({
                        email: "wrong@mc.com",
                        password: "123456"
                    })
                    .expect(401)
                    .end((err, res) => {
                        done(err);
                    });
            });

            it("throws error when email and password are blank", done => {
                request.post("/token")
                    .expect(401)
                    .end((err, res) => {
                        done(err);
                    });
            });
        });
    });
});