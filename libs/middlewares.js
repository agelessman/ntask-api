/**
 * Created by M.C on 2017/9/15.
 */
import bodyParser from "body-parser"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import logger from "./logger"
import compression from "compression"
import helmet from "helmet"

module.exports = app => {
    "use strict";
    app.set("port", 3000);
    app.set("json spaces", 4);
    console.log(`err  ${JSON.stringify(app.auth)}`);
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use(compression());
    app.use(helmet());
    app.use(morgan("common", {
        stream: {
            write: (message) => {
                logger.info(message);
            }
        }
    }));
    app.use(cors({
        origin: ["http://localhost:3001"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }));
    app.use((req, res, next) => {
        // console.log(`header: ${JSON.stringify(req.headers)}`);
        if (req.body && req.body.id) {
            delete req.body.id;
        }
        next();
    });

    app.use(express.static("public"));
};
