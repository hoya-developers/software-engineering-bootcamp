## Database

### Introduction

Databases are typically categorized as SQL or NoSQL.

#### SQL

SQL DBs are relational. They use structured query language, or an ORM (Object Relational Mapping) library to manipulate data. They are typically far more durable and consistent than NoSQL DBs, and every API request is treated atomically. They often scale vertically, and are excellent for data that has well-defined relationships. Common SQL DBs include MySQL, PostgreSQL

Typically, objects will have a one-to-one, one-to-many, many-to-one, or many-to-many relationship with other objects. More on this later.

[Here's a pretty good SQL cheat sheet.](https://www.sqltutorial.org/sql-cheat-sheet/)

#### NoSQL

NoSQL is becoming more and more popular. Typically, NoSQL involves a key-value store, or a document store (like JSON). They can also include graph databases like [Neo4J](https://neo4j.com/) or [AWS's Neptune](https://aws.amazon.com/neptune/), a paid service.

NoSQL is best for unstructured or dynamic data, and is often superior for velocity. They are very easy to scale horizontally as they often contain automatic load balancing across nodes, and are extremely elastic.

Popular databases include [MongoDB](https://www.mongodb.com/), [Firebase](https://firebase.google.com/), a paid service, and [Supabase](https://supabase.com/). Supabase is built on top of PostgreSQL and is an open-source Firebase, essentially.

Memcached and Elasticsearch are important for dev ops stuff, outside of the scope of this course.

[Redis](https://redis.io/docs/get-started/faq/) is extremely important, regardless of what other DB you're using. It is a key value store but it lives in memory, and is typically referred to as a data structure server. If you want your application to be as fast as possible, you're going to need to use Redis or a similar service. Redis supports data caching and session storage, which we'll be talking about, along with a bunch of other features which we won't talk about.

## Getting Started
