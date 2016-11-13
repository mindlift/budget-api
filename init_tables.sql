/* built-in extension for case-insensitive text fields */
create extension citext;

/* custom data types to align with the data interfaces defined in the models */
create type month_type as enum (
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
);

create type category_type as enum (
	'debit',
	'credit'
);

/* category names are modelled as a relation to be more easily re-usable across budgets */
create table category_name (
	id serial primary key,
	name varchar(32),
	owner integer references account (id),
	unique (name, owner)
);

create table account (
	id serial primary key,
	username varchar(32),
	email citext unique -- although the user-defined portion of an email is case-sensitive, it is not often used this way by large providers of email services like google, yahoo, etc.
);

create table budget (
	id serial primary key,
	year integer,
	month month_type,
	account integer references account (id)
);

create table category (
	id serial primary key,
	category_name integer references category_name (id),
	type category_type,
	budgeted_amount money
	
);

create table entry (
	id serial primary key,
	description text,
	amount money,
	category integer references category (id)
);