/**
 * Created by joshua on 2016-11-12.
 */
import {expect} from 'chai';
import InitDB from '../src/InitDB';
import {Account} from "../src/model/BudgetAccount";

describe("InitDB", function() {

    let db: any;

    before("Initialize database", function() {
        db = InitDB.initialize();
    });

    it("Should be able to add an account to the database", function() {
        let account: Account = {
            username: 'admin',
            email: 'budget.api@gmail.com',
            budgets: []
        };
        return db.one('insert into budget_account(data) values ($1) returning data', [account])
            .then(function(result: any) {
                console.log(result);
                console.log(Object.keys(result));
                expect(result).to.not.be.null;
                expect(result.data).to.have.all.keys('username', 'email', 'budgets');
            })
            .catch(function(error: any) {
                console.error("There was an error: " + error.message);
                expect.fail();
            })
    });

    it("Should be able to retrieve budget_account data from the db on a JSON attribute value", function() {
        return db.any("select * from budget_account where data->>$1 = $2", ['username', 'admin'])
            .then(function(result: any) {
                console.log(result);
                console.log(Object.keys(result));
                expect(result).to.not.be.null;
                expect(result[0].data).to.have.all.keys('username', 'email', 'budgets');
            })
            .catch(function (error: any) {
                console.error("There was an error: " + error.message);
                expect.fail();
            })
    });

});