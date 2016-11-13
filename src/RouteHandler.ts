/**
 * Created by joshua on 2016-10-21.
 */

import restify = require('restify')
import InitDB from "./InitDB";
import AccountController from "./controller/AccountController";

export default class RouteHandler {

    private static db = InitDB.initialize();
    private static accountController = new AccountController(RouteHandler.db);

    public static getHomepage(req: restify.Request, res: restify.Response, next: restify.Next) {

    }

    public static getAccounts(req: restify.Request, res: restify.Response, next: restify.Next) {

    }

    public static createAccount(req: restify.Request, res: restify.Response, next: restify.Next) {
        //TODO: find http response codes for successful/failed CREATE requests

    }

    public static updateAccount(req: restify.Request, res: restify.Response, next: restify.Next) {}

    public static deleteAccount(req: restify.Request, res: restify.Response, next: restify.Next) {}



}