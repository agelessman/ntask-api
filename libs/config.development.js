/**
 * Created by M.C on 2017/9/15.
 */
import logger from "./logger.js"

module.exports = {
    database: "ntask",
    username: "machao",
    password: "123456",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        logging: (sql) => {
            "use strict";
            logger.info(`${new Date()} ${sql}`);
        },
        define: {
            underscored: true
        }
    },
    jwtSecret: "asdfsafsafsafsafsafsafsafd",
    jwtSession: {session: false}
};