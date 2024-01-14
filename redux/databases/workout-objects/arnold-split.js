import singleLegCalfPress from "../exercise-objects/single-leg-calf-press"
import deadliftConventional from "../exercise-objects/deadlift-conventional"
import squatBulgarianSplitBar from "../exercise-objects/squat-bulgarian-split-bar"

export default 
{
    id: "2998391530597610",
    name: "Arnold Split",
    difficulty: 4,
    focus: 'Body Building',
    description: '',
    latest_state: {
        is_completed: false,
        date_used: '',
        cycle: 1,
        split: 1,
        name: 'Leg Day'
    },
    cycles : [
        {
            order: 1,
            split : [
                {
                    name: "Leg Day",
                    order: 1,
                    exercises : [
                        {
                            exercise_id: squatBulgarianSplitBar.id,
                            name: squatBulgarianSplitBar.name,
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
                            exercise_id: singleLegCalfPress.id,
                            name: singleLegCalfPress.name,
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
        {
            order: 2,
            split : [
                {
                    name: "Leg Day",
                    order: 1,
                    exercises : [
                        {
                            exercise_id: squatBulgarianSplitBar.id,
                            name: squatBulgarianSplitBar.name,
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
                            exercise_id: singleLegCalfPress.id,
                            name: singleLegCalfPress.name,
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