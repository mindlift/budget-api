/**
 * Created by joshua on 2016-10-23.
 */
import {Budget} from "./Budget";

export interface BudgetAccount {

    username: string;
    email: string;
    budgets: Budget[];

}