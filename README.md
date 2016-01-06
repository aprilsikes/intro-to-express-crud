## RESTful(ish) Routing

In short, and simply as an introduction, RESTful routes are a route naming
convention used by developers. It is an _architecture style_ for designing networked applications.

RESTful applications use HTTP requests to post data (create and/or update), read data (e.g., make queries), and delete data. Thus, REST uses HTTP for all four CRUD (Create/Read/Update/Delete) operations.


| URL                   | HTTP Verb | View                         |
|-----------------------|-----------|------------------------------|
| /cars                 | GET       | index                        |
| /cars/new             | GET       | new                          |
| /cars                 | POST      | - redirect -  ( CREATE )     |
| /cars/:id             | GET       | show   ( READ )              |
| /cars/:id/edit        | GET       | edit                         |
| /cars/:id/update      | PUT/PATCH | - redirect -    ( UPDATE )   |
| /cars/:id/delete      | DELETE    | - redirect -    ( DELETE )   |


## Your Mission

Your mission is to practice writing RESTful CRUD Express Routes. Your goal is to
be able to spin up these route in under 30 minutes.

## Exercise

In `routes/cars.js` add the necessary routes to make the app work. Each page has a link that leads to the RESTful(ish) route that should be associated with the specific CRUD task.

You will need to use `req.params` complete this exercise. Do not change code in
the view files.

__Do them in this order:__

1. /cars (GET) ALL `render index`
2. /cars/new (GET) NEW `render new`
3. /cars (POST) CREATE `redirect to index `
4. /cars/:id (GET) SHOW `render show`
5. /cars/:id/edit (GET) EDIT `render edit`
6. /cars/:id/update (POST) UPDATE `redirect to index`
7. /cars/:id/delete (DELETE) DESTROY `redirect to index`

## Set Up

```
fork / clone
npm install
nodemon
```

__SUBMIT A PULL REQUEST UPON COMPLETION__
