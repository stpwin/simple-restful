const express = require("express");
const bodyParser = require("body-parser");

const routes = {
  teachers: require("./routes/teachers"),
  courses: require("./routes/courses")
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(function (req, res, next){

// })

function handle_error(handler) {
  return async function (req, res, next) {
    try {
      await handler(req, res);
    } catch (error) {
      console.warn(error.message);
      res.status(500).json({ error: { message: error.message } });
      //   next(error);
    }
  };
}

app.get("/", (req, res) => {
  res.json({
    message: "Hello! this is a simple restful api service for node.js"
  });
});

for (const [routeName, routeController] of Object.entries(routes)) {
  if (routeController.getAll) {
    app.get(`/api/${routeName}`, handle_error(routeController.getAll));
  }
  if (routeController.getById) {
    app.get(`/api/${routeName}/:id`, handle_error(routeController.getById));
  }
  if (routeController.create) {
    app.post(`/api/${routeName}`, handle_error(routeController.create));
  }
  if (routeController.update) {
    app.put(`/api/${routeName}/:id`, handle_error(routeController.update));
  }
  if (routeController.remove) {
    app.delete(`/api/${routeName}/:id`, handle_error(routeController.remove));
  }
  if (routeController.search) {
    app.get(
      `/api/${routeName}/search/:search`,
      handle_error(routeController.search)
    );
  }
}

module.exports = app;
