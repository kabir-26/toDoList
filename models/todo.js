const mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category : {
    type: String,
    required : true
  },
  status : {
      type : Boolean,
      default : false
  },
  date : {
      type :String
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
