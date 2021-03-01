var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  day: {
      type: Date,
      required: true
  },

  exercises: {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
  }
});

var Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;