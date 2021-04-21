const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workout_schema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    excercise: [
        {
            type:{
                type: String,
                require: "Exercise type"
            },

            name: {
                type: String,
                required: "Exercise name"
            },

            duration: {
                type: Number,
                required: "Exercise duration (in minutes)"
            },

            weight: {
                type: Number,
            },

            reps: {
                type: Number,
            },

            sets: {
                type: Number,
            },

            distance: {
                type: Number,
            },
        }
    ]
});

const Workout = mongoose.model('Workout', workout_schema);

module.exports = Workout;