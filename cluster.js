/**
 * Created by M.C on 2017/9/25.
 */
import cluster from "cluster"
import os from "os"

const CPUS = os.cpus();

if (cluster.isMaster) {
    // Fork
    CPUS.forEach(() => cluster.fork());

    // Listening connection event
    cluster.on("listening", work => {
        "use strict";
        console.log(`Cluster ${work.process.pid} connected`);
    });

    // Disconnect
    cluster.on("disconnect", work => {
        "use strict";
        console.log(`Cluster ${work.process.pid} disconnected`);
    });

    // Exit
    cluster.on("exit", worker => {
        "use strict";
        console.log(`Cluster ${worker.process.pid} is dead`);
        cluster.fork();
    });

} else {
    require("./index");
}
