# A simple RESTFul api with Node.js

## Requiments:

- Node.js
- PostgreSQL

## Installation:

1. Install Node.js
2. Install PostgreSQL
3. Clone this repository to your computer
4. Create PosgreSQL database with name `simple-restful` by run command `createdb simple-restful`
5. Run command `npm i` in cloned directory and wait for installing dependency
6. Initialize database by uncomment `models.teacher.sync({ force: true })` [Line 5] in files `express/routes/teachers.js` and `express/routes/courses.js`
7. Run command `npm start` to start service

## Request list:

**Get all teachers:** <br>
`GET localhost:port/api/teachers`
response

```
[
    {
        "id": 1,
        "first_name": "สมชาย",
        "last_name": "ลำปาง",
        "date_of_birth": "2020-10-12T09:02:46.000Z",
        "age": 24,
        "country": "TH",
        "createdAt": "2020-10-12T09:43:49.027Z",
        "updatedAt": "2020-10-12T09:43:49.027Z"
    },
    {
        "id": 2,
        "first_name": "สิทธิพร",
        "last_name": "กาวี",
        "date_of_birth": "1996-03-04T17:00:00.000Z",
        "age": 24,
        "country": "TH",
        "createdAt": "2020-10-12T10:41:48.645Z",
        "updatedAt": "2020-10-12T10:41:48.645Z"
    }
]
```

**Create new teacher:** <br>
`POST localhost:port/api/teachers`<br>
with JSON body

```
{
    "first_name": "CHANGE_TEXT_HERE",
    "last_name": "CHANGE_TEXT_HERE",
    "date_of_birth": "2020-10-12T09:02:46+0000", //ISO-8601 format
    "country": "TH",
    "age": 24
}
```

Response:

```
{
    "message": "created"
}
```

**Get teacher by id:** <br>
`GET localhost:port/api/teachers/2` << change id<br>
Reponse:

```
{
    "id": 2,
    "first_name": "สิทธิพร",
    "last_name": "กาวี",
    "date_of_birth": "1996-03-04T17:00:00.000Z",
    "age": 24,
    "country": "TH",
    "createdAt": "2020-10-12T10:41:48.645Z",
    "updatedAt": "2020-10-12T10:41:48.645Z"
}
```

**Search teacher name:** <br>
`GET localhost:port/api/teachers/search/สิทธิพร` << search text<br>
Reponse:

```
[
    {
        "id": 2,
        "first_name": "สิทธิพร",
        "last_name": "กาวี",
        "date_of_birth": "1996-03-04T17:00:00.000Z",
        "age": 24,
        "country": "TH",
        "createdAt": "2020-10-12T10:41:48.645Z",
        "updatedAt": "2020-10-12T10:41:48.645Z"
    }
]
```

**Update teacher:**<br>
`PUT localhost:3000/api/teachers/2` << change id<br>
with JSON body

```
{
    "first_name": "Sittiporn",
    "last_name": "Kawee",
    "age": "25"
}
```

Response:

```
{
    "message": "updated"
}
```

**Delete teacher:** <br>
`DELETE localhost:port/api/teachers/1` << change id<br>
Response:

```
{
    "message": "deleted"
}
```

---

**Get all courses:** <br>
`GET localhost:port/api/courses` <br>
Response:

```
[
    {
        "id": 1,
        "course_name": "สร้างเว็บแอพ ง่ายนิดเดียว",
        "course_description": "",
        "course_length": 200,
        "language": "TH",
        "createdAt": "2020-10-12T09:48:20.271Z",
        "updatedAt": "2020-10-12T09:48:20.271Z"
    },
    {
        "id": 2,
        "course_name": "เรียน ES6 ฟรี",
        "course_description": "สำหรับผู้ที่สนใจ",
        "course_length": 10,
        "language": "TH",
        "createdAt": "2020-10-12T09:49:41.418Z",
        "updatedAt": "2020-10-12T09:49:41.418Z"
    }
]
```

**Create new course:** <br>
`POST localhost:port/api/courses`<br>
with JSON body

```
{
    "course_name": "เรียน ES6 ฟรี",
    "course_description": "สำหรับผู้ที่สนใจ",
    "course_length": 10,
    "language": "TH"
}
```

Response:

```
{
    "message": "created"
}
```

**Get course by id:** <br>
`GET localhost:port/api/course/2` << change id<br>
Reponse:

```
{
    "id": 2,
    "course_name": "เรียน ES6 เพียง 5000 บาท",
    "course_description": "สำหรับผู้ที่สนใจ",
    "course_length": 10,
    "language": "TH",
    "createdAt": "2020-10-12T09:49:41.418Z",
    "updatedAt": "2020-10-12T10:59:59.291Z"
}
```

**Search course name:** <br>
`GET localhost:port/api/course/search/ฟรี` << search text<br>
Reponse:

```
[
    {
        "id": 2,
        "course_name": "เรียน ES6 ฟรี",
        "course_description": "สำหรับผู้ที่สนใจ",
        "course_length": 10,
        "language": "TH",
        "createdAt": "2020-10-12T09:49:41.418Z",
        "updatedAt": "2020-10-12T09:49:41.418Z"
    }
]
```

**Update course:**<br>
`PUT localhost:port/api/course/2` << change id<br>
with JSON body

```
{
    "course_name": "เรียน ES6 เพียง 5000 บาท",
    "course_description": "สำหรับผู้ที่สนใจ",
    "course_length": 10,
    "language": "TH"
}
```

Response:

```
{
    "message": "updated"
}
```

**Delete course:** <br>
`DELETE localhost:port/api/course/1` << change id<br>
Response:

```
{
    "message": "deleted"
}
```
