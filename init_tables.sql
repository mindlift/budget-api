create extension citext;

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

create table category_name (
	id serial primary key,
	name varchar(32),
	owner integer references account (id),
	unique (name, owner)
);

create table account (
	id serial primary key,
	username varchar(32),
	email citext unique
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