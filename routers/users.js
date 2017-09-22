/**
 * Created by machao on 17/9/16.
 */
module.exports = app => {
    "use strict";
    const Users = app.db.models.Users;

    app.route("/user")
        .all(app.auth.authenticate())
    /**
     * @api {get} /user Return the authenticated user's data
     * @apiGroup User
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *  {"Authorization": "JWT xyz.abc.123.hgj"}
     * @apiSuccess {Number} id User id
     * @apiSuccess {String} name User name
     * @apiSuccess {String} email User email
     * @apiSuccessExample {json} Success
     *  HTTP/1.1 200 OK
     *  {
     *      "id": 1,
     *      "name": "James",
     *      "email": "James@mc.com
     *  }
     * @apiErrorExample {json} Find error
     *  HTTP/1.1 412 Precondition Failed
     */
    .get((req, res) => {
            Users.findById(req.user.id, {
                attributes: ["id", "name", "email"]
            })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })

    /**
     * @api {delete} /user Deletes an authenticated user
     * @apiGroup User
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {josn} Header
     *  {"Authorization": "JWT xyz.abc.123.hgj"}
     * @apiSuccessExample {json} Success
     *  HTTP/1.1 204 No Content
     * @apiErrorExample {json} Delete error
     * HTTP/1.1 412 Precondition Failed
     */
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

    /**
     * @api {post} /users Register a new user
     * @apiGroup User
     * @apiParam {String} name User name
     * @apiParam {String} email User email
     * @apiParam {String} password User password
     * @apiParamExample {json} Input
     *  {
     *      "name": "James",
     *      "email": "James@mc.com",
     *      "password": "123456"
     *  }
     * @apiSuccess {Number} id User id
     * @apiSuccess {String} name User name
     * @apiSuccess {String} email User email
     * @apiSuccess {String} password User encrypted password
     * @apiSuccess {Date} update_at Update's date
     * @apiSuccess {Date} create_at Rigister's date
     * @apiSuccessExample {json} Success
     *  {
     *      "id": 1,
     *      "name": "James",
     *      "email": "James@mc.com",
     *      "updated_at": "2016-02-10T15:20:11.700Z",
     *      "created_at": "2016-02-10T15:29:11.700Z"
     *  }
     * @apiErrorExample {json} Rergister error
     *  HTTP/1.1 412 Precondition Failed
     */
    app.post("/users", (req, res) => {
        Users.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });
};