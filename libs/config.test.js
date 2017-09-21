/**
 * Created by M.C on 2017/9/20.
 */
module.exports = {
    database: "ntask",
    username: "machao",
    password: "123456",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        logging: false,
        define: {
            underscored: true
        }
    },
    jwtSecret: "asdfsafsafsafsafsafsafsafd",
    jwtSession: {session: false}
};