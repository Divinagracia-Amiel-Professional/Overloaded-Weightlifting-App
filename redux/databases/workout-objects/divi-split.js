import calfPressLegPressMachineSingle from "../exercise-objects/calf-press-leg-press-machine-single"
import deadliftConventional from "../exercise-objects/deadlift-conventional"
import squatBulgarianSplitBar from "../exercise-objects/squat-bulgarian-split-bar"
import squatGobletEccentric from "../exercise-objects/squat-goblet-eccentric"
import hipThrustBar from "../exercise-objects/hip-thrust-bar"
import legCurlSeatedEccentric from "../exercise-objects/leg-curl-seated-eccentric"
import hipAbductionsSeated from "../exercise-objects/hip-abductions-seated"


export default 
{
    id: "divisplitID",
    name: "Divi Split",
    difficulty: 3.5,
    focus: 'Strength Building',
    description: '',
    cycles : [
        {
            order: 2,
            split : [
                {
                    name: "Leg Day",
                    order: 3,
                    exercises : [
                        {
                            exercise_id: deadliftConventional.id,
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
                            exercise_id: squatBulgarianSplitBar.id,
                            workout_data: {
                                order: 2,
                                rep_end: 12,
                                rep_start: 10,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: hipThrustBar.id,
                            workout_data: {
                                order: 3,
                                rep_end: 15,
                                rep_start: 15,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: squatGobletEccentric.id,
                            workout_data: {
                                order: 4,
                                rep_end: 15,
                                rep_start: 15,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: legCurlSeatedEccentric.id,
                            workout_data: {
                                order: 5,
                                rep_end: 10,
                                rep_start: 10,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: hipAbductionsSeated.id,
                            workout_data: {
                                order: 6,
                                rep_end: 30,
                                rep_start: 30,
                                rest_increment: 0,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: calfPressLegPressMachineSingle.id,
                            workout_data: {
                                order: 7,
                                rep_end: 30,
                                rep_start: 30,
                                rest_increment: 0,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                    ]
                }
            ],
        },
    ]
}   
