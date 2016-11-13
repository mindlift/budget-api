/**
 * Created by joshua on 2016-10-23.
 */

export interface Category {

    name: string;
    type: CategoryType;
    budgeted_amount: number;
    entries: Entry[];

}

interface Entry {

    description: string;
    amount: number;

}

enum CategoryType {
    debit,
    credit
}