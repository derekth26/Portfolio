# Backend Server

This is a backend server that provides a RESTful API to search for jobs.

## Running the server

Install the dependencies and then run the server using the following command.

```sh
npm run server
```


## Server Endpoints

Refer to the following endpoints to interact with the server.

### GET all Jobs
Request
`GET /jobs`

Response
```json5
[
  {
    "id": 7,
    "title": "Software Development Manager",
    "date_posted": "2024-04-13",
    "company": "TechLeaders Inc.",
    "job_type": "Full-time",
    "location": "San Jose, CA",
    "description": "Join our leadership team as a Software Development Manager and oversee the delivery of high-quality software products.",
    "qualifications": "Excellent communication and leadership skills"
  },
  {
    "id": 10,
    "title": "Senior Software Engineer",
    "date_posted": "2024-05-08",
    "company": "InnovateTech",
    "job_type": "Full-time",
    "location": "San Francisco, CA",
    "description": "Join our dynamic team as a Senior Software Engineer. You will be responsible for designing and implementing scalable software solutions for our cutting-edge products.",
    "qualifications": "Strong problem-solving and communication skills"
  },
  // more jobs below.
]
```

Example Request
```
http://localhost:3000/jobs
```

### SEARCH (GET) Jobs

Request
`GET /jobs?search=Software`
Response
```json5
[
  {
    "id": 7,
    "title": "Software Development Manager",
    "date_posted": "2024-04-13",
    "company": "TechLeaders Inc.",
    "job_type": "Full-time",
    "location": "San Jose, CA",
    "description": "Join our leadership team as a Software Development Manager and oversee the delivery of high-quality software products.",
    "qualifications": "Excellent communication and leadership skills"
  },
  {
    "id": 10,
    "title": "Senior Software Engineer",
    "date_posted": "2024-05-08",
    "company": "InnovateTech",
    "job_type": "Full-time",
    "location": "San Francisco, CA",
    "description": "Join our dynamic team as a Senior Software Engineer. You will be responsible for designing and implementing scalable software solutions for our cutting-edge products.",
    "qualifications": "Strong problem-solving and communication skills"
  },
  // more jobs below.
]
```

### GET Job by ID

Request
`GET /jobs/:id`

Response
```
{
  "id": 7,
  "title": "Software Development Manager",
  "date_posted": "2024-04-13",
  "company": "TechLeaders Inc.",
  "job_type": "Full-time",
  "location": "San Jose, CA",
  "description": "Join our leadership team as a Software Development Manager and oversee the delivery of high-quality software products.",
  "qualifications": "Excellent communication and leadership skills"
}
```

Example Request
```
http://localhost:3000/jobs/7
```

### GET Saved Jobs

Request
`GET /saved-jobs`
Response
```
[
    {
        "id": 7,
        "jobId": 5,
        "createdAt": "2024-05-09T15:34:13.192Z"
    },
    {
        "id": 8,
        "jobId": 14,
        "createdAt": "2024-05-09T15:34:19.403Z"
    }
]
```
Example Request
```
http://localhost:3000/jobs/7
```

### POST a saved job

Request
`POST /saved-jobs`
body:
{
    "jobId": numberOfJobId here
}

Response
```
{
    "id": 7,
    "jobId": 5,
    "createdAt": "2024-05-09T15:34:13.192Z"
}
```
Example Request
```
POST http://localhost:3000/saved-jobs
```
```json
{
    "jobId": 5
}
```

## Learning more about the backend (Optional)

We're using Express as a web server framework, SQLite as a database, and Prisma as an ORM to interact with the database.

### Learning about Express

If you want to learn more about Express, you can check out the [Express documentation](https://expressjs.com/)

### Learning about SQLite

SQLite is essentially a SQL database that is stored in a single file. It is a serverless database that doesn't require a separate server process to run.

Most of the knowledge you have learned about SQL databases will apply to SQLite, but it does have some limitations that won't be discussed here.

More details about SQLite can be found in the [SQLite documentation](https://www.sqlite.org/docs.html), and the node.js package we are using to interact with SQLite can be found [here](https://www.npmjs.com/package/sqlite3).

### Learning about Prisma

Prisma is an object-relational mapper that allows you to interact with the database using a type-safe API.

If you want to learn more about Prisma, you can check out the [Prisma documentation](https://www.prisma.io/docs/)

If you want to learn specifically more about how to make queries, you can check out the [Prisma query API documentation](https://www.prisma.io/docs/orm/prisma-client/queries/crud)

To browse the database run the following command to run "Prisma Studio".
```sh
npm run navigate-db
```
and go to `http://localhost:5555/` in your browser.
