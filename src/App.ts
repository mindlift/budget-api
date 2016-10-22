import Server from "./Server";


export default class App {
    public initServer(port: number) {
        console.log('App::initServer( ' + port + ' ) - start');
        let server = new Server(port);
        server.start()
            .then(function (val: boolean) {
            console.log("App::initServer() - started: " + val);})
            .catch(function (err: Error) {
            console.log("App::initServer() - ERROR: " + err.message);});
    }
}

let app = new App();
app.initServer(8080);

