import restify = require('restify');
import fs = require('fs');
import path = require('path');
import RouteHandler from "./RouteHandler";

export default class Server {

    private port: number;
    private server: restify.Server;

    constructor(port: number) {
        this.port = port;
    }

    // starts the server using HTTPS
    public start() {
        let that = this;
        return new Promise(function(resolve, reject) {

            console.log("Server::start() - the current directory is: " + __dirname);

            let dir_path: string = __dirname + path.sep + '..' + path.sep + 'https' + path.sep;
            let certificateBuffer: Buffer = fs.readFileSync(dir_path + 'devcert.pem');
            let keyBuffer: Buffer = fs.readFileSync(dir_path + 'devkey.pem');
            let certificate: string = certificateBuffer.toString();
            let key: string = keyBuffer.toString();

            // console.log("Server::start() - certificate is: " + certificate);

            that.server = restify.createServer({
                certificate: certificate,
                key: key,
                name: 'budget-api',
            });

            that.server.get('/', function(req, res, next) {
                res.json({body: "hello world"});
                next();
            });

            that.server.listen(that.port, function() {
                console.log('%s listening at %s', that.server.name, that.server.url);
                resolve(true);
            })

            // that.server.get('/', );

        })
    }

    public stop() {
        let that = this;
        return new Promise(function (resolve) {
            that.server.close(function() {
                resolve(true);
            });
        });
    }

}