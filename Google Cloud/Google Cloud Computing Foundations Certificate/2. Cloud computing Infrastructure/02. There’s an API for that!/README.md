# There's an API for that!

# CHAPTERS

1. The purpose of APls
1. Cloud Endpoints
1. Lab: Cloud Endpoints: Qwik Start
1. Apigee API Management
1. Pub/Sub
1. Lab: Pub/Sub: Qwik Start - Python
1. Quiz
1. Summary

# 1. The Purpose of APIs

# What is an API?

- Application Programming Interface
- A software service’s implementation can be complex and changeable.

- If other software services had to be explicitly coded in detail in order to use that service, the result would be brittle and error-prone.
- So instead, application developers structure the software they write so that it presents **a clean, well-defined interface** that hides unnecessary detail, and then they document that interface.
- That’s an application programming interface.

```s
A clean, well-defined interface
Underlying implementation can change
Changes to the API are made with versions
```

## What is REST?

- **RE**presentational **S**tate **T**ransfer, or `REST`, is currently the most popular architectural style for services.

1. A set of constraints a service must comply with.
2. An API that uses HTTP requests to GET, PUT, POST, and DELETE data.
3. Designed to set up a format for applications to communicate.
4. Great for cloud applications because they are stateless.
   1. One of the main reasons REST APIs work well with the cloud is due to their **stateless nature**.
   2. State information does not need to be **stored** or **referenced** for the API to run.
5. Authentication via Auth and security by leveraging tokens.

## Deploying and managing APIs can be difficult

- Interface definition
- Authentication and authorization
- Management and scalability
- Logging and monitoring

