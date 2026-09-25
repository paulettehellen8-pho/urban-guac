Categories of DBs
   1. Relational DBs
   2. Non Relational DBs

Relational DBs <more popular>
   -Tables relate to each other

   ADVANTAGES
      1. Relationships
      2. Queries (easy)
      3. Use SQL

   DISADVANTAGES
      1. If you use numbers as primary keys -> the tables have maximum rows
      2. Schema <defined data>


Non Relational DBs
   ADVANTAGES
      1. Humongous data stores <Mongo DB>
      2. Non structured data
      3. Best for <iot> and sensors <10 seconds>
      4. Offline applications and syncing: <Couch DB>
      5. Allows you to store documents -> no need for a seperate server<Mongo Grid> 
         -> You can store documents in different partitions

   DISADVANTAGES
      1. Difficult to store and sync <related data>
         -> You would have to do it manually


Examples or Relational DBs
   1. Sqlite
   2. Postgres ***
   3. MySQL
   4. CockroachDB <disaster recovery>
   5. CasandraDB


Examples or Non-Relational DBs
   1. MongoDB
   2. DynamoDB<aws mongoDB>
   3. CouchDB [server]<offline>[Pouch DB] -> You can replicate data
   4. Pocket Base
   5. Redis <cache>


SQL -> Structured Query Language
Syntax for sql
   - It is not case sensitive
   - sql keywords <reserved for the language>
   - Each sql statement should terminate with a colo except the last on
   - Atomic <file> Either all of them execute or all of them fail

   Creating tables
      create table <name> (<columns>)
      To delete it -> drop table <name>

Constraints<DB INDEPENDENT>
1. Not null<required>
2. Unique<email>