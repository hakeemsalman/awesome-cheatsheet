# Objectives

1. Explore the different storage options available in Google Cloud.
2. Learn to differentiate between structured and unstructured storage in the cloud.
3. Examine how you can use Cloud Storage for unstructured data storage.
4. Explore the use case for relational versus NoSQL storage options and identify the options available with Google Cloud.

# Chapters
- [Objectives](#objectives)
- [Chapters](#chapters)
- [1. Storage options available in google Cloud](#1-storage-options-available-in-google-cloud)
- [2. Structures and Unstructured data storage](#2-structures-and-unstructured-data-storage)
  - [2.1 Unstructured](#21-unstructured)
  - [2.2 Structured Data](#22-structured-data)
    - [2.2.1 Transcational workloads](#221-transcational-workloads)
    - [2.2.2 Analytical workloads](#222-analytical-workloads)
- [3. Unstructured storage using Cloud Storage](#3-unstructured-storage-using-cloud-storage)
  - [Cloud Storage is a fully managed scalable service that has a wide variety of uses](#cloud-storage-is-a-fully-managed-scalable-service-that-has-a-wide-variety-of-uses)
- [4. Lab - Cloud storage: Qwik Start - CLI/SDK](#4-lab---cloud-storage-qwik-start---clisdk)
  - [Objectives](#objectives-1)
  - [Overveiw](#overveiw)
    - [Task 1. Create a bucket](#task-1-create-a-bucket)
    - [Task 2. Upload an object into your bucket](#task-2-upload-an-object-into-your-bucket)
    - [Task 3. Download an object from your bucket](#task-3-download-an-object-from-your-bucket)
    - [Task 4. Copy an object to a folder in the bucket](#task-4-copy-an-object-to-a-folder-in-the-bucket)
    - [Task 5. List contents of a bucket or folder](#task-5-list-contents-of-a-bucket-or-folder)
    - [Task 6. List details for an object](#task-6-list-details-for-an-object)
- [5. SQL Managed services](#5-sql-managed-services)
- [6. Exploring cloud SQL](#6-exploring-cloud-sql)
  - [There are many reasons to use Cloud SQL](#there-are-many-reasons-to-use-cloud-sql)
- [7. Cloud SQL for MySQL: Qwik Start](#7-cloud-sql-for-mysql-qwik-start)
  - [Task 1. Create a Cloud SQL instance](#task-1-create-a-cloud-sql-instance)
- [**PENDING**](#pending)
- [8. Cloud Spanner](#8-cloud-spanner)
- [9. NoSQL managed services options](#9-nosql-managed-services-options)
- [10. Firestore, A NoSQL document store](#10-firestore-a-nosql-document-store)
- [11. Big table as a NoSQL option](#11-big-table-as-a-nosql-option)
- [12. QUIZ](#12-quiz)

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

# 3. Unstructured storage using Cloud Storage

## Cloud Storage is a fully managed scalable service that has a wide variety of uses

- Include serving website content
- Storing data for archival and disaster recovery
- Distributing large data objects to end users through Direct Download.

- Cloud Storage’s primary use is whenever binary large-object storage (also known as a “BLOB”) is needed for online content
  - Online content(such as videos and photos)
  - Backup and archiving
  - Storage of intermediate results

- Types of file storage
  - File storage
  - Block storage
  - **Object Storage**
    - These objects are stored in a packaged format that contains the binary form of the actual data itself, relevant associated metadata (such as date created, author, resource type, and permissions), and a globally unique identifier.
    - These unique keys are in the form of URLs, which means object storage interacts well with web technologies.
    - Data commonly stored as objects includes video, pictures, and audio recordings.
    - **Cloud Storage is Google’s object storage product.**

- There are **Four** basic Cloud Storage classes  
  - Standard Storage:
    - Standard Storage is considered best for frequently accessed, or “hot,” data.
    - It’s also great for data that is stored for only brief periods of time.
  - Nearline Storage:
    - Storing infrequently accessed data, like reading or modifying data once per month on average.
    - Examples include data backups, long-tail multimedia content, or data archiving.
  - Coldline Storage:
    - It is also a low-cost option for storing infrequently accessed data.
    - It is meant for reading or modifying data, at most, once every 90 days.
  - Archive Storage:
    - lowest-cost option, used ideally for data archiving, online backup, and disaster recovery.
    - It’s the best choice for data that you plan to access less than once a year.
- Each storage class has some common features
  - Unlimited storage (no min object size) 
  - Worldwide accessibility and locations
  - Low latency and high durability
  - A uniform experience
  - Geo-redundancy
- Cloud Storage objects are **immutable**
  - Cannot directly edit
  - Create new version
- Cloud Storage files are organized into buckets.
  - A bucket needs a globally unique name and a specific geographic location for where it should be stored, and an ideal location for a bucket is where latency is minimized.
- Administrators can either allow each new version to completely overwrite the older one or keep track of each change made to a particular object by enabling “versioning” within a bucket.
  - If you choose to use versioning, Cloud Storage will keep a detailed history of modifications -- that is, overwrites or deletes -- of all objects contained in that bucket.
  - If you don’t turn on object versioning, by default new versions will always overwrite older versions.
- Cloud Storage’s tight integration with other Google Cloud products and services means that there are many additional ways to move data into the service.

# 4. Lab - Cloud storage: Qwik Start - CLI/SDK

## Objectives

During this lab, you'll:
1. Upload an object to a bucket.
2. Download an object from a bucket.
3. Copy an object to a folder in the bucket.
4. List contents of a bucket or folder.
5. List details for an object.
6. Make an object publicly accessible.


## Overveiw

- Cloud Storage allows world-wide storage and retrieval of any amount of data at any time. You can use Cloud Storage for a range of scenarios including serving website content, storing data for archival and disaster recovery, or distributing large data objects to users via direct download.

### Task 1. Create a bucket

- The Cloud Storage utility tool, [gsutil](https://cloud.google.com/storage/docs/gsutil), is installed and ready to use in Google Cloud. In this lab you use `gsutil` in Cloud Shell.
- **Bucket naming rules**
  - Do not include sensitive information in the bucket name, because the bucket namespace is global and publicly visible.
  - Bucket names must contain only lowercase letters, numbers, dashes (-), underscores (_), and dots (.). Names containing dots require [verification](https://cloud.google.com/storage/docs/domain-name-verification).
  - Bucket names must start and end with a number or letter.
  - Bucket names must contain 3 to 63 characters. Names containing dots can contain up to 222 characters, but each dot-separated component can be no longer than 63 characters.
  - Bucket names cannot be represented as an IP address in dotted-decimal notation (for example, 192.168.5.4).
  - Bucket names cannot begin with the "goog" prefix.
  - Bucket names cannot contain "google" or close misspellings of "google".
  - Also, for DNS compliance and future compatibility, you should not use underscores (_) or have a period adjacent to another period or dash. For example, ".." or "-." or ".-" are not valid in DNS names.

1. **Create a bucket**: Use the make bucket (`mb`) command to make a bucket, replacing `<YOUR_BUCKET_NAME>` with a unique name that follows the bucket naming rules:
   1. `gsutil mb gs://<YOUR-BUCKET-NAME>`

### Task 2. Upload an object into your bucket

1. To download this image (ada.jpg) into your bucket, enter this command into Cloud Shell:
   1. `curl https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg --output ada.jpg`
2. Use the `gsutil cp` command to upload the image from the location where you saved it to the bucket you created:
   1. `gsutil cp ada.jpg gs://YOUR-BUCKET-NAME`
3. Now remove the downloaded image:
   1. `rm ada.jpg`

### Task 3. Download an object from your bucket

1. Use the `gsutil cp` command to download the image you stored in your bucket to Cloud Shell:
   1. `gsutil cp -r gs://YOUR-BUCKET-NAME/ada.jpg .`

### Task 4. Copy an object to a folder in the bucket

1. Use the `gsutil cp` command to create a folder called `image-folder` and copy the image (ada.jpg) into it:
   1. `gsutil cp gs://YOUR-BUCKET-NAME/ada.jpg gs://YOUR-BUCKET-NAME/image-folder/`

### Task 5. List contents of a bucket or folder

1. Use the `gsutil ls` command to list the contents of the bucket:
   1. `gsutil ls gs://YOUR-BUCKET-NAME`

### Task 6. List details for an object

1. Use the `gsutil acl ch` command to grant all users read permission for the object stored in your bucket
   1. `gsutil acl ch -u AllUsers:R gs://YOUR-BUCKET-NAME/ada.jpg`


# 5. SQL Managed services

- **What is a database?**
- A collection of information organized so that it can easily be accessed and managed.
- Computer applications run databases to get a fast answer to questions.

- Relational database management systems
  - RDBMS
  - relational databases
  - SQL databases
- Suitable use cases:
  - Have a well-structured data model.
  - Need transactions.
  - Ability to join data across tables to retrieve complex data combinations.

Google cloud offers two managable SQL databases
1. Cloud SQL
2. Cloud Spanner

# 6. Exploring cloud SQL

- Cloud SQL lets you focus on building great applications
- 
**Relational databases**
- MySQL
- PostgreSQL
- SQL Server

**Mundane tasks**(*routine activities* that are ordinary and repetitive, and don't require special training)
- Applying patches/updates
- Managing backups
- Configuring replications

## There are many reasons to use Cloud SQL

- Doesn't require any software installation or maintenance
- Can scale up to 96 processor cores, 624 GB of RAM, and 64 TB of storage
- Supports automatic replication scenarios
- Supports managed backups - The cost of an instance covers 7 backups
- Encrypts customer data when on Google's internal networks and when stored in database tables, temporary files, and backups
- Includes a network firewall

# 7. Cloud SQL for MySQL: Qwik Start

**What you'll do**
- Create a Cloud SQL instance
- Connect to the instance in Cloud Shell
- Create a database and upload data

## Task 1. Create a Cloud SQL instance

1. From the Navigation menu (Navigation menu icon) click on SQL.
1. Click Create Instance.
1. Choose MySQL database engine.
1. Enter Instance ID as myinstance.
1. In the password field click on the Generate link and the eye icon to see the password. Save the password to use in the next section.
1. Select the database version as MySQL 8.
1. For Choose a Cloud SQL edition, select Enterprise edition.
1. For Preset choose Development (4 vCPU, 16 GB RAM, 100 GB Storage, Single zone).
1. Set Region as us-east1.
1. Set the Multi zones (Highly available) > Primary Zone field as us-east1-c.
1. Click CREATE INSTANCE.

# **PENDING**


# 8. Cloud Spanner

- Cloud Spanner users are often in the advertising, finance, and marketing technology industries, where they need to manage end-user metadata.

**Cloud Spanner is a fully managed relational database**
- Scales horizontally
- Strongly consistent
- Speaks SQL

- Applications that Cloud Spanner is especially suited for
  - Applications that require:
    - SQL relational database management system with joins and secondary indexes
    - Built-in high availability
    - Strong global consistency
    - And high numbers of input/output operations per second. We're talking tens of thousands of reads/writes per second or more.

> Data is automatically and instantly copied across regions, which is called synchronous replication.
> As a result, queries always return consistent and ordered answers regardless of the region.


# 9. NoSQL managed services options

**Google offers two managed NoSQL database options**:
- Firestore
  - Firestore is a fully managed, serverless NoSQL document store that supports ACID transactions.
- Cloud Bigtable.
  - Cloud Bigtable is a petabyte scale, sparse wide column NoSQL database that offers extremely low write latency.

# 10. Firestore, A NoSQL document store

- Firestore is a flexible, horizontally scalable, NoSQL cloud database for mobile, web, and server development.
- With Firestore, incoming data is stored in a document structure, and these documents are then organized into collections.

1. Firestore’s NoSQL queries can then be used to retrieve individual, specific documents
2. Or to retrieve all the documents in a collection that match your query parameters.
3. Queries can include multiple, chained filters and combine filtering and sorting options.
4. They're also indexed by default, so query performance is proportional to the size of the result set, not the dataset.

- Firestore uses online and offline data synchronization
  - Firestore uses data synchronization to update data on any connected device.
  - However, it's also designed to make simple, one-time fetch queries efficiently.
  - It caches data that an app is actively using, so the app can write, read, listen to, and query data even if the device is offline.
  - When the device comes back online, Firestore synchronizes any local changes back to Firestore.

# 11. Big table as a NoSQL option

**Bigtable**: Google's NoSQL big data database service.

> It's the same database that powers many core Google services, including Search, Analytics, Maps, and Gmail.

- Handle massive workloads
- Consistent low latency
- High throughput

- Great choice for:
  - Operational application:
  - Analytical applications

- Why customers often choose Bigtable:
  - Work with more than 1TB of semi-structured or structured data
  - Data is fast with high throughput, or it's rapidly changing
  - Work with NoSQL data
  - Data is a time-series or has natural semantic ordering
  - Work with big data, running asynchronous batch or synchronous real-time processing on the data
  - Run machine learning algorithms on the data

- Using APIs, data can be read from and written to Bigtable through a data service layer like Managed VMs, the HBase REST Server, or a Java Server using the HBase client.
- Typically this is used to serve data to applications, dashboards, and data services.
- Data can also be streamed in through various popular stream processing frameworks like Dataflow Streaming, Spark Streaming, and Storm.
- And if streaming is not an option, data can also be read from and written to Bigtable through batch processes like Hadoop MapReduce, Dataflow, or Spark.

# 12. QUIZ

1. Which storage service is best suited to unstructured data?
- [ ] Cloud Spanner
- [x] Cloud Storage
- [ ] Firestore
- [ ] Bigtable

2. Google Cloud offers two managed relational database services. What are they?

- [x] Cloud SQL
- [ ] Bigtable
- [ ] Firestore
- [x] Cloud Spanner

3. You are looking for an unstructured storage solution for archiving files that might never be accessed again. Which Cloud Storage class is the best option?

- [ ] Nearline storage
- [ ] Coldline storage
- [x] Archive storage
- [ ] Standard storage

4. Which storage solution is a petabyte scale, NoSQL database?

- [ ] Cloud Spanner
- [x] Bigtable
- [ ] Firestore
- [ ] Cloud SQL


