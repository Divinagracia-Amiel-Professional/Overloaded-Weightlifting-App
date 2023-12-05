import benchPress from "../exercise-objects/bench-press"
import inclineCableFly from "../exercise-objects/incline-cable-fly"
import shoulderPressStanding from "../exercise-objects/shoulder-press-standing"
import egyptianLateralRaises from "../exercise-objects/egyptian-lateral-raises"
import cablePushdowns from "../exercise-objects/cable-pushdowns" 
import isometricDumbbellChestHold from "../exercise-objects/isometric-dumbbell-chest-hold"
import ropeFacePull from "../exercise-objects/rope-face-pull"

import latPulldowns from "../exercise-objects/lat-pulldowns"
import barbellRow from "../exercise-objects/barbell-row" 
import chestSupportedRearDeltRow from "../exercise-objects/chest-supported-rear-delt-row"
import barbellCurlNarrowGrip from "../exercise-objects/barbell-curl-narrow-grip"
import preacherCurls from "../exercise-objects/preacher-curls"
import facePullsKneeling from "../exercise-objects/face-pulls-kneeling"
import facePullsLying from "../exercise-objects/face-pulls-lying"

import calfPressLegPressMachineSingle from "../exercise-objects/calf-press-leg-press-machine-single"
import deadliftConventional from "../exercise-objects/deadlift-conventional"
import squatBulgarianSplitBar from "../exercise-objects/squat-bulgarian-split-bar"
import squatGobletEccentric from "../exercise-objects/squat-goblet-eccentric"
import hipThrustBar from "../exercise-objects/hip-thrust-bar"
import legCurlSeatedEccentric from "../exercise-objects/leg-curl-seated-eccentric"
import hipAbductionsSeated from "../exercise-objects/hip-abductions-seated"
import pullUps from "../exercise-objects/pull-ups"


export default 
{
    id: "divisplitID",
    name: "Divi Split",
    difficulty: 3.5,
    focus: 'Strength Building',
    description: 'Venenatis maecenas at ullamcorper risus iaculis at imperdiet nulla. Amet sed est porttitor ridiculus elementum. Non sem leo nunc quisque. Nec lobortis nisl blandit viverra amet tortor lorem elit mattis. Integer hendrerit egestas blandit at blandit ut. Arcu faucibus vitae in leo gravida auctor. Purus erat lacus enim viverra curabitur. Malesuada tempor neque in sed habitasse mi. Magna tristique consectetur commodo duis cursus enim massa. Mi varius posuere amet est. Tristique nisl ipsum massa eu dui sed feugiat et.',
    latest_state: {
        is_completed: false,
        date_used: '',
        cycle: 3,
        split: 3,
        name: 'Leg Day'
    },
    cycles : [
        {
            order: 1,
            split : [
                {
                    name: "Push Day",
                    order: 1,
                    exercises : [
                        {
                            exercise_id: benchPress.id,
                            workout_data: {
                                order: 1,
                                rep_end: 6,
                                rep_start: 4,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: inclineCableFly.id,
                            workout_data: {
                                order: 2,
                                rep_end: 15,
                                rep_start: 12,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: shoulderPressStanding.id,
                            workout_data: {
                                order: 3,
                                rep_end: 8,
                                rep_start: 6,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: egyptianLateralRaises.id,
                            workout_data: {
                                order: 4,
                                rep_end: 15,
                                rep_start: 12,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: cablePushdowns.id,
                            workout_data: {
                                order: 5,
                                rep_end: 15,
                                rep_start: 12,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 4
                            }
                        },
                        // {
                        //     exercise_id: isometricDumbbellChestHold.id,
                        //     workout_data: {
                        //         order: 6,
                        //         rep_end: 30,
                        //         rep_start: 30,
                        //         rest_increment: 0,
                        //         rest_initial: 90,
                        //         set_count: 3
                        //     }
                        // },
                        {
                            exercise_id: ropeFacePull.id,
                            workout_data: {
                                order: 6,
                                rep_end: 20,
                                rep_start: 20,
                                rest_increment: 0,
                                rest_initial: 60,
                                set_count: 3
                            }
                        },
                    ]
                }
            ],
        },
        {
            order: 2,
            split : [
                {
                    name: "Pull Day",
                    order: 2,
                    exercises : [
                        // {
                        //     exercise_id: latPulldowns.id,
                        //     workout_data: {
                        //         order: 1,
                        //         rep_end: 6,
                        //         rep_start: 4,
                        //         rest_increment: 30,
                        //         rest_initial: 120,
                        //         set_count: 4
                        //     }
                        // },
                        {
                            exercise_id: pullUps.id,
                            workout_data: {
                                order: 1,
                                rep_end: 'until fail',
                                rep_start: 'until fail',
                                rest_increment: 30,
                                rest_initial: 150,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: barbellRow.id,
                            workout_data: {
                                order: 2,
                                rep_end: 15,
                                rep_start: 10,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: chestSupportedRearDeltRow.id,
                            workout_data: {
                                order: 3,
                                rep_end: 15,
                                rep_start: 10,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: barbellCurlNarrowGrip.id,
                            workout_data: {
                                order: 4,
                                rep_end: 12,
                                rep_start: 8,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: preacherCurls.id,
                            workout_data: {
                                order: 5,
                                rep_end: 12,
                                rep_start: 8,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: facePullsKneeling.id,
                            workout_data: {
                                order: 6,
                                rep_end: 15,
                                rep_start: 10,
                                rest_increment: 0,
                                rest_initial: 60,
                                set_count: 2
                            }
                        },
                        {
                            exercise_id: facePullsLying.id,
                            workout_data: {
                                order: 7,
                                rep_end: 15,
                                rep_start: 10,
                                rest_increment: 0,
                                rest_initial: 60,
                                set_count: 2
                            }
                        },
                    ]
                }
            ],
        },
        {
            order: 3,
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
