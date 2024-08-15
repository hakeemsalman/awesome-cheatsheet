# Objectives

1. Explore the different storage options available in Google Cloud.
2. Learn to differentiate between structured and unstructured storage in the cloud.
3. Examine how you can use Cloud Storage for unstructured data storage.
4. Explore the use case for relational versus NoSQL storage options and identify the options available with Google Cloud.

# Chapters

1. [Storage options available in Google Cloud](#1-storage-options-available-in-google-cloud)
1. Structured and unstructured data storage
1. Unstructured Storage using Cloud Storage
1. Lab: Cloud Storage: Qwik Start - CLI/SDK
1. SQL managed services
1. Exploring Cloud SQL
1. Lab: Cloud SQL for MySQL: Qwik Start
1. Cloud Spanner as a managed service
1. NoSQL managed services options
1. Firestore, a NoSQL document store
1. Cloud Bigtable as a NoSQL option
1. Quiz
1. Summarv

# 1. Storage options available in google Cloud

Google storage offers:

1. Relational Database.
2. Non-relational database.
3. Worldwide object storage.

- Google cloud databases and storages services
  1. Cloud Storage
  2. Cloud SQL          ---- Relational DB
  3. Cloud Spanner      ---- Relational DB
  4. Firestore          ---- NoSQL DB
  5. Cloud Bigtable     ---- NoSQL DB

- Commn cloud storage use case
  - Content storage and delivery
  - Data analytics general compute
  - backup and archival storage

- For users with databases, Google has two prionties
  1. Migrate existing databases to the cloud, and move them to the right service.
  2. Innovate, build or rebuild for the cloud, offer mobile applications, and plan for future growth 
  
# 2. Structures and Unstructured data storage

## 2.1 Unstructured 

1. Unstructured data is information stored in a non-tabular form such as documents, images, and audio files.
2. Unstructured data is usually best suited to Cloud Storage.
3. the data has no internal identifier to enable search functions to identify it.
4. 
## 2.2 Structured Data

1. structured data, which represents information stored in tables, rows, and columns.
2. You can expect this type of data to be organized and clearly defined and usually easy to capture, access, and analyze.
3. it can be understood by programming languages and can be manipulated relatively quickly.


- **Structured data comes in two types:**
  1. Transactional workloads.
  2. Analytical workloads.

### 2.2.1 Transcational workloads

1. Transactional workloads stem from Online Transaction Processing systems, which are used when fast data inserts and updates are required to build row-based records.
1. This is usually to maintain a system snapshot.
1. They require relatively standardized queries that affect only a few records.
1. So, if your data is transactional and you need to access it using SQL, Cloud SQL and Cloud Spanner are two options.
1. Cloud SQL works best for local to regional scalability, But Cloud Spanner is best to scale a database globally.

1. If the transactional data will be accessed without SQL, Firestore might be the best option.
2. Firestore is a transactional NoSQL, document-oriented database.

### 2.2.2 Analytical workloads

1. which stem from Online Analytical Processing systems, which are used when entire datasets need to be read.
2. They often require complex queries, for example, aggregations.
3. If you have analytical workloads that require SQL commands, BigQuery may be the best option.
4. BigQuery, Google’s data warehouse solution, lets you analyze petabyte-scale datasets.
5. Alternatively, Bigtable provides a scalable NoSQL solution for analytical workloads.
6. It’s best for real-time, high-throughput applications that require only millisecond latency.

![alt text](./assets/cloud%20storage%20diff.png)

