/**
 * Created by joshua on 2016-10-23.
 */

export interface Category {

    name: string;
    type: CategoryType;
    budgetAmount: number;
    entries: Entry[];

}

interface Entry {

    description: string;
    amount: number;

}

enum CategoryType {
    Debit,
    Credit
}