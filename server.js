var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");


// // Require all models
// var db = require("./models");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();



// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
    {
       useNewUrlParser: true 
    }
  );


// Requiring Routes
app.use(require('./routes/api-routes.js'));
app.use(require('./routes/html-routes.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });



// app.get("/api/workouts", (req, res) => {
//   db.Workout.find({})
//     .then(dbWorkout => {
//       console.log(dbWorkout);
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.post("/api/workouts", (req, res) => {
//   console.log(req.body);

//   db.Workout.insert(req.body, (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(data);
//     }
//   });

//   // db.Workout.create(
//   //   {date: new Date().getDate()},
//   //   {exercises: [req.body]}
//   // ).then(dbWorkout => {
//   //   res.json(dbWorkout);
//   //   console.log(dbWorkout + "post request server")
//   // })
//   // .catch(err => {
//   //   res.json(err);
//   // });
// });
  