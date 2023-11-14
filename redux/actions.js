export const initDbAddExercisesToStore = db => ({
    type: "initDbAddToStore",
    payload: db
})

export const initDbAddWorkoutsToStore = db => ({
    type: "initDbAddWorkouts",
    payload: db
})
