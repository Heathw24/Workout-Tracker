var mongoose = require("mongoose");
const Exercises = require("./exercises");

var Schema = mongoose.Schema;

var WorkoutSchema = new Schema({
  day: {
      type: Date,
      default: Date.now
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
          type: Number,
          default: 0
      },
      weight: {
          type: Number,
          default: 0
      },
      sets: {
           type: Number,
           default: 0
      },
      reps: {
           type: Number,
           default: 0
      },
      distance: {
          type: Number,
          default: 0
      }
  }
  ],
  totalDuration: {
    type: Number,
    set: calcTotal
}
});

function calcTotal(totalDuration){
    var totalDuration = 0;
    for (i = 0; i < this.exercises.length; i++){
      totalDuration = totalDuration + this.exercises[i].duration;
    };
    return totalDuration;
};


var Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;