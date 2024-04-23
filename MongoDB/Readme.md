
# Table of Contents
- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Database](#database)
  - [Collection](#collection)
  - [Document](#document)
    - [The following table shows the relationship of RDBMS terminology with MongoDB.](#the-following-table-shows-the-relationship-of-rdbms-terminology-with-mongodb)
    - [Sample document](#sample-document)
    - [What is \_id](#what-is-_id)
- [MongoDB Advantages](#mongodb-advantages)
  - [Why Use MongoDB?](#why-use-mongodb)
  - [Where to Use MongoDB?](#where-to-use-mongodb)
- [MongoDB Env.](#mongodb-env)

# Overview

## Database

- Database is a physical container for collections. 
- Each database gets its own set of files on the file system.
- A single MongoDB server typically has multiple databases.

## Collection

- Collection is a group of MongoDB documents.
- It is the equivalent of an RDBMS table.
- A collection exists within a single database.
- Collections do not enforce a schema.
- Documents within a collection can have different fields.
- Typically, all documents in a collection are of similar or related purpose.

## Document

- A document is a set of key-value pairs.
- Documents have dynamic schema.
- Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data.


### The following table shows the relationship of RDBMS terminology with MongoDB.

| RDBMS	| MongoDB |
|---|---|
| Database	| Database |
| Table	| Collection |
| Tuple/Row |	Document |
| column	| Field |
| Table Join	| Embedded Documents |
| Primary Key	| Primary Key (Default key `_id` provided by MongoDB itself) |
| ** Database Server and Client ** |
| mysqld/Oracle	| mongod |
| mysql/sqlplus	| mongo |


### Sample document

```js
{
   `_id`: ObjectId(7df78ad8902c)
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100, 
   comments: [	
      {
         user:'user1',
         message: 'My first comment',
         dateCreated: new Date(2011,1,20,2,15),
         like: 0 
      },
      {
         user:'user2',
         message: 'My second comments',
         dateCreated: new Date(2011,1,25,7,45),
         like: 5
      }
   ]
}
```

### What is _id

- `_id` is a 12 bytes hexadecimal number which assures the uniqueness of every document.
- You can provide `_id` while inserting the document.
- If you don’t provide then MongoDB provides a unique id for every document.
- These 12 bytes
  - first 4 bytes for the current timestamp,
  - next 3 bytes for machine id,
  - next 2 bytes for process id of MongoDB server and
  - remaining 3 bytes are simple incremental VALUE.
  
# MongoDB Advantages

## Why Use MongoDB?
- Document Oriented Storage − Data is stored in the form of JSON style documents.
- Index on any attribute
- Replication and high availability
- Auto-Sharding
- Rich queries
- Fast in-place updates
- Professional support by MongoDB

## Where to Use MongoDB?
- Big Data
- Content Management and Delivery
- Mobile and Social Infrastructure
- User Data Management
- Data Hub

# MongoDB Env.

