var express = require("express");
var path = require("path");
var router = express.Router();
var todoItemModel = require("../models/todoItem");

todoItemModel.methods(["get", "put", "post", "delete"]);
todoItemModel.register(router, "/todos");

module.exports = router;
