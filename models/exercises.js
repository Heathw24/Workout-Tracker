var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
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
});

var Exercises = mongoose.model("Exercises", ExerciseSchema);

module.exports = Exercises;