import calfPressLegPressMachine from "../exercise-objects/calf-press-leg-press-machine-single"
import deadliftConventional from "../exercise-objects/deadlift-conventional"
import squatBulgarianSplitBar from "../exercise-objects/squat-bulgarian-split-bar"

export default 
{
    id: "tomplatzID",
    name: "Tom Platz Split",
    difficulty: 5,
    focus: 'Legs',
    description: '',
    latest_state: {
        is_completed: false,
        date_used: '',
        cycle: 2,
        split: 3,
        name: 'Leg Day'
    },
    cycles : [
        {
            order: 2,
            split : [
                {
                    name: "Leg Day",
                    order: 3,
                    exercises : [
                        {
                            exercise_id: squatBulgarianSplitBar.id,
                            workout_data: {
                                order: 1,
                                rep_end: 4,
                                rep_start: 4,
                                rest_increment: 30,
                                rest_initial: 180,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: calfPressLegPressMachine.id,
                            workout_data: {
                                order: 2,
                                rep_end: 6,
                                rep_start: 8,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 3
                            }
                        }
                    ]
                }
            ],
        },
    ]
}   