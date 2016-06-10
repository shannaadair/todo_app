/**
 * Created by Shanna on 6/9/16.
 */
var restful = require("node-restful");
var mongoose =restful.mongoose;

var todoItem = new mongoose.Schema({
    description: String,
    done: Boolean

});

module.exports = restful.model("todoItem", todoItem);