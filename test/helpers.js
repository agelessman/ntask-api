/**
 * Created by M.C on 2017/9/20.
 */
import supertest from "supertest"
import chai from "chai"
import app from "../index"

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;
