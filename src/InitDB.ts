/**
 * Created by joshua on 2016-11-12.
 */

export default class InitDB {

    // this could potentially result in problems if user doesn't have
    // permissions for all parts on the path of __dirname
    private static options_path = __dirname + '/../DbConnectOptions.json';

    public static writeOptions(options?: any): void {
        if (options) {
            let fs = require('fs');
            fs.writeFileSync(this.options_path, options);
        }

    }

    public static readOptions(path?: string): any {
        let fs = require('fs');
        let optsAsString: string;
        if (path) {
            optsAsString = fs.readFileSync(path);
        } else {
            optsAsString = fs.readFileSync(this.options_path);
        }
        let opts = JSON.parse(optsAsString);
        return opts;
    }

    // initialize a new pgp database object and return it
    // optional: pass in initialization options to use instead of the defaults
    public static initialize(options?: any): any {
        let pgp = require('pg-promise')();
        if (options) {
            return pgp(options);
        }
        return pgp(this.readOptions());
    }
}