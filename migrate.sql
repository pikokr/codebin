create table posts (
    id int not null unique,
    content text not null,
    title text not null
);

alter table posts add language text;
