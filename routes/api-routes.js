const Workout = require("../models/workouts");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", async (req, res) => {
        try {
            const response = await Workout.create({ type: "workout" })
            res.json(response);
        }
        catch (err) {
            console.log("error occurred while trying to create a workout: ", err)
        }
    });

    app.put("/api/workouts/:id", ({ body, params }, res) => {
        const workoutId = params.id;
        let savedExercises = [];
        Workout.find({ _id: workoutId })
            .then(dbWorkout => {
                savedExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...savedExercises, body]
                console.log(allExercises)
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            });

        function updateWorkout(exercises) {
            Workout.findByIdAndUpdate(workoutId, { exercises: exercises }, function (err, doc) {
                if (err) {
                    console.log(err)
                }
            })
        }
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json(err);
            });
    });
}