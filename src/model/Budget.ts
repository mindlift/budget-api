/**
 * Created by joshua on 2016-10-23.
 */

import {Category} from "./Category";

export interface Budget {

    year: number;
    month: Month;
    expenditures: Category[];
    income: Category[];

}

enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}