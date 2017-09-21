/**
 * Created by M.C on 2017/9/20.
 */

describe("Routes: Index", () => {
    "use strict";
    describe("GET /", () => {
        it("returns the API status", done => {
            request.get("/")
                .expect(200)
                .end((err, res) => {
                    const expected = {status: "NTask API"};
                    expect(res.body).to.eql(expected);
                    done(err);
                });
        });
    });
});