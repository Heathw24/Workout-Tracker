var db = require("../models");


module.exports = function(app) {

    // Get route for all workouts
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // Post route for creating a new workout
    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create(body)
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });

     // Get route for getting the last 7 workouts
     app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}).limit(7)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });    

    //Put route for updating an existing workout
    app.put("/api/workouts/:id", (req, res) => {       
        db.Workout.findByIdAndUpdate({"_id": mongojs.ObjectId(req.params.id)},{$push: {"exercises":req.body}}, {new: true}, (err, data) => {                 
            if (err) {
              console.log(err);
            } else {
              res.json(data);
            }
        }); 
    });  

};