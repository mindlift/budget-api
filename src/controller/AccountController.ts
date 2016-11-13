import {Account} from "../model/Account";
/**
 * Created by joshua on 2016-11-12.
 */

export default class AccountController {

    private db: any;

    constructor(database: any) {
        this.db = database;
    }

    public createNewAccount(username: string, email: string, password: string): Promise<Account> {
        // validate email, password

        // if account exists with supplied email, reject

        // else, insert new account

        return new Promise(function(resolve, reject) {

        });
    }

}