var db = require("../models");
var router = require('express').Router();



    // Get route for all workouts
    router.get("/api/workouts", function(req, res) {
        db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // Post route for creating a new workout
    // app.post("/api/workouts", ({body}, res) => {
    //     db.Workout.create(body)
    //     .then(dbWorkout => {
    //       res.json(dbWorkout);
    //     })
    //     .catch(err => {
    //       res.json(err);
    //     });
    // });

    router.post('/api/workouts', function({ body }, res) {
        db.Workout
            .create(body)
            .then((dbWorkout) => {
                res.json(dbWorkout);
            })
            .catch(({ message }) => {
                console.log(message);
            });
    });


     // Get route for getting the last 7 workouts
     router.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}).limit(7)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });    

    //Put route for updating an existing workout
    router.put("/api/workouts/:id", (req, res) => {       
        db.Workout.findOneAndUpdate({"_id": req.params.id},{$push: {"exercises":req.body}}, {new: true}, (err, data) => {                 
            if (err) {
              console.log(err);
            } else {
              res.json(data);
            }
        }); 
    });  

    module.exports = router;
