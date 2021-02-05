// Database
const db = require("../config/mongoose");
const Todo = require("../models/todo");

module.exports.home = function (req, res) {
  //CHECK CATEGORY
  
  if (req.body == {} || req.body.category == "All") {
    
    Todo.find({}, function (err, fetchedToDos) {
      if (err) {
        console.log(`Error in fetching contacts ${err}`);
        return;
      }
      
      return res.render("home", {
        title: "Home",
        todos: fetchedToDos,
        category: "All",
      });
    });
  } else {
    Todo.find(req.body, function (err, fetchedToDos) {
      if (err) {
        console.log(`Error in fetching contacts ${err}`);
        return;
      }
      return res.render("home", {
        title: "Home",
        todos: fetchedToDos,
        category: req.body.category,
      });
    });
  }
};

module.exports.add = function (req, res) {
  Todo.create(req.body);
  res.redirect("back");
};

module.exports.delete = function (req, res) {
  let id = req.query.id;
  Todo.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log(`Error in deleting contact ${err}`);
      return;
    }
    return res.redirect("back");
  });
};

module.exports.update = function (req, res) {

  let id = req.query.id;
  
  Todo.findOne({ _id: id }, function (err, fetchedTodo) {
    if (err) {
      console.log(`Cannot find Contact ${err}`);
      return;
    }
    fetchedTodo.status = !fetchedTodo.status;
    fetchedTodo.save();
  });
  return res.redirect("back");
};
