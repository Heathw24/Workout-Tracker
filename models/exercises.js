var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
    type: {
        type: Option,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number,
    distance: Number
});

var Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;