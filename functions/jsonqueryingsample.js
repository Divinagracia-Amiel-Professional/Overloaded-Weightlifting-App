//this is just a placeholder file dont import to anymain project file

import diviSplit from '../redux/databases/workout-objects/divi-split';

const cycle_order = diviSplit.cycles.find(cycle => {
    return cycle.order === 2
})
const split_order = cycle_order.split.find(split => {
    return split.order === 3
})
const exercise = split_order.exercises.find(exercise => {
    return exercise.workout_data.order === 2
})

console.log(exercise)
split_order.exercises.push(
    {
        exercise_id: "8",
        workout_data: {
            order: 3,
        }   
    }
)

console.log(split_order)

const remove = split_order.exercises.filter(exercise => {
    return exercise.workout_data.order !== 1
})

console.log(remove)