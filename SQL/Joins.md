# SQL Joins

## SQL Joins Definition

This course is taken from [GFG](https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/)

- SQL JOIN clause is used to query and access data from multiple tables by establishing logical relationships between them.
- It can access data from multiple tables simultaneously using common key values shared across different tables.


#### **Studen Table**
---

|ROLL_NO|NAME|ADDRESS|PHONE|AGE
|---|---|---|---|---|
|1|JAFFAR|HYD|XXXXXXXXXX|18
|2|ZEESHAN|MEHBOOB|XXXXXXXXXX|19
|3|FAROOQ|GOA|XXXXXXXXXX|15
|4|SAQUIB|NY|XXXXXXXXXX|16
|5|ABDULLAH|LONDON|XXXXXXXXXX|21
|6|NAYEEM|SYDNEY|XXXXXXXXXX|22
|7|RAYEES|CHENNAI|XXXXXXXXXX|19
|8|AMEER|BANGOLORE|XXXXXXXXXX|18


#### **Student Course**
---

| COURSE_ID | ROLL_NO |
| --------- | ------- |
| 1         | 1       |
| 2         | 2       |
| 2         | 3       |
| 3         | 4       |
| 1         | 5       |
| 4         | 6       |
| 5         | 7       |
| 4         | 8       |


- Primary key is `ROLL_NO`, we can perform a **JOIN** operation using the given SQL query:
  - s   -> Student table
  - sc  -> Student Course tables

> **SELECT** s.roll_no, s.name, s.address, s.phone, s.age, sc.course_id   
> **FROM** Student s  
> **JOIN** StudentCourse sc **ON** s.roll_no = sc.roll_no;  