# Data-bucket

v1.0.0
---------------------

- Author : `Sandeep`
- Description : A simple repo built in node js & sails js to ingest data from different sources.

Repo uses mongo as database and exposes a single API to ingest data from any source

Pre-Requirement
---------------------

1. Mongo Database Connection - To Store data
2. Redis Database - To store session information

Deployment Steps
---------------------

1. Clone this project
2. Install nodejs v16.19
3. Install sailsjs globally (run in terminal) - ```npm install -g sails```
4. Install dependency (run in terminal) - ```npm install```
5. Update .env file (add in file if not available) configuration
6. Start project (run in terminal) - ```sails lift --prod```


.env file -- with example data set
---------------------
```
    NODE_ENV=production
    PORT=1338
    SERVER_ENV=production
    DATA_ENCRYPTION_KEY=<ALPHANUMERICPRIVATEKEY>
    MONGO_URL=mongodb://localhost:27017/<database-name>
    LOG_LEVEL=<info/debug/error/verbose>
    REDIS_SESSION_URL=redis://localhost:6379/<database-number>
    SESSION_SECRET=<ALPHANUMERICPRIVATEKEY>
```

API Details
---------------

Store data in mongo

- API Endpoint :   `/data`
- API Method   :   `POST`
- Sample Request Body :
  ```
  {
    "event_name": "event1",
    "data-string": "string-value",
    "data-number": 10,
    "data-float": 1.0001,
    "data-object": {
        "name": "john"
    },
    "data-array" : [1,2,3,4],
    "data-array-object": [{
        "name" : "adam",
        "date" : "2023-01-01",
        "included-boolean": true
    }]
  }
  ```
- Response - Success
  ```
  {
    "message": "Success!"
  }
  ```
