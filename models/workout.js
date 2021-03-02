var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  day: {
      type: Date,
      required: true
  },

  exercises: [
    {
      type: {
          type: String,
          required: true
      },
      name: {
          type: String,
          required: true
      },
      duration: {
          type: Number
      },
      weight: {
          type: Number
      },
      sets: {
           Number
      },
      reps: {
           Number
      },
      distance: {
          Number
      }
  }
  ] 
});

var Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;