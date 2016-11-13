import restify = require('restify');
import fs = require('fs');
import path = require('path');
import pgp = require('pg-promise');
import RouteHandler from "./RouteHandler";
import InitDB from "./InitDB";

export default class Server {

    private port: number;
    private server: restify.Server;
    private db: any;


    constructor(port: number) {
        this.port = port;
        this.db = InitDB.initialize();
    }

    // starts the server using HTTPS
    public start() {
        let that = this;
        return new Promise(function(resolve, reject) {

            console.log("Server::initialize() - the current directory is: " + __dirname);

            let dir_path: string = __dirname + path.sep + '..' + path.sep + 'https' + path.sep;
            let certificate: string = fs.readFileSync(dir_path + 'devcert.pem').toString();
            let key: string = fs.readFileSync(dir_path + 'devkey.pem').toString();

            // console.log("Server::initialize() - certificate is: " + certificate);

            that.server = restify.createServer({
                certificate: certificate,
                key: key,
                name: 'budget-api',
            });

            // register the route handlers with the restify server
            that.server.get('/', function(req, res, next) {
                let params = req.headers;
                res.json({body: params});
                next();
            });

            // accounts
            that.server.get('/api/v1/accounts', function(req, res, next) {});

            that.server.post('/api/v1/accounts', function(req, res, next) {});

            that.server.put('/api/v1/accounts', function(req, res, next) {});

            that.server.del('/api/v1/accounts', function(req, res, next) {});

            // list of budgets
            that.server.get('/api/v1/accounts/budgets', function(req, res, next) {});

            that.server.post('/api/v1/accounts/budgets', function(req, res, next) {});

            that.server.put('/api/v1/accounts/budgets', function(req, res, next) {});

            that.server.del('/api/v1/accounts/budgets', function(req, res, next) {});

            // budget detail
            that.server.get('/api/v1/accounts/budgets/:budget', function(req, res, next) {});

            that.server.post('/api/v1/accounts/budgets/:budget', function(req, res, next) {});

            that.server.put('/api/v1/accounts/budgets/:budget', function(req, res, next) {});

            that.server.del('/api/v1/accounts/budgets/:budget', function(req, res, next) {});

            that.server.listen(that.port, function() {
                console.log('%s listening at %s', that.server.name, that.server.url);
                resolve(true);
            })

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