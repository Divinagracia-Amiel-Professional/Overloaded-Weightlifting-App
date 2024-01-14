//first cycle push
import benchPress from "../exercise-objects/bench-press"
import inclineCableFly from "../exercise-objects/incline-cable-fly"
import shoulderPressStanding from "../exercise-objects/shoulder-press-standing"
import egyptianLateralRaises from "../exercise-objects/egyptian-lateral-raises"
import cablePushdowns from "../exercise-objects/cable-pushdowns" 
import isometricDumbbellChestHold from "../exercise-objects/isometric-dumbbell-chest-hold"
import ropeFacePull from "../exercise-objects/rope-face-pull"
//second cycle push
import machineShoulderPress from "../exercise-objects/machine-shoulder-press"
import closeGripBenchPress from "../exercise-objects/close-grip-bench-press"
import declinedCableFly from "../exercise-objects/declined-cable-fly"
import ropeUprightRow from "../exercise-objects/rope-upright-row"
import dumbbellLateralRaise from "../exercise-objects/dumbbell-lateral-raise"
import overheadCableTricepsExtension from "../exercise-objects/overhead-cable-triceps-extension"
import elevatedTrianglePushUps from "../exercise-objects/elevated-triangle-push-ups"
//third cycle push
import inclinedBarbellBenchPress from "../exercise-objects/inclined-barbell-bench-press"
import arnoldPress from "../exercise-objects/arnold-press"
import pausedFlatDumbbellPress from "../exercise-objects/paused-flat-dumbbell-press"
import leanAwayLateralRaise from "../exercise-objects/lean-away-lateral-raise"
import oneArmCableFly from "../exercise-objects/one-arm-cable-fly"
import inclinedDumbbellOverheadExtension from "../exercise-objects/inclined-dumbbell-overhead-extension"
import cableTricepKickbacks from "../exercise-objects/cable-tricep-kickbacks"

//first cycle pull
import rackPull from "../exercise-objects/rack-pull"
import meadowsRow from "../exercise-objects/meadows-row"
import omniGripLatPulldowns from "../exercise-objects/omni-grip-lat-pulldowns"
import reversePecDeck from "../exercise-objects/reverse-pec-deck"
import dumbbellRearDeltRaise from "../exercise-objects/dumbbell-rear-delt-raise"
import ezBarbellCurl from "../exercise-objects/ez-barbell-curl"
import inclinedDumbbellCurl from "../exercise-objects/inclined-dumbbell-curl"
//second cycle pull
import latPulldowns from "../exercise-objects/lat-pulldowns"
import barbellRow from "../exercise-objects/barbell-row" 
import machineHighLowRow from "../exercise-objects/machine-high-low-row"
import wideCablePullOver from "../exercise-objects/wide-cable-pull-over"
import snatchGripBarbellShrug from "../exercise-objects/snatch-grip-barbell-shrug"
import dumbbellCurls from "../exercise-objects/dumbbell-curls"
import hammerCurl from "../exercise-objects/hammer-curl"
import reverseDumbbellCurls from "../exercise-objects/reverse-dumbbell-curls"
//third cycle pull
import pullUps from "../exercise-objects/pull-ups"
import reverseGripPullup from "../exercise-objects/reverse-grip-pullup"
import chestSupportedRearDeltRow from "../exercise-objects/chest-supported-rear-delt-row"
import barbellCurlNarrowGrip from "../exercise-objects/barbell-curl-narrow-grip"
import preacherCurls from "../exercise-objects/preacher-curls"
import facePullsKneeling from "../exercise-objects/face-pulls-kneeling"
import facePullsLying from "../exercise-objects/face-pulls-lying"

//first cycle legs
import backSquats from "../exercise-objects/back-squats"
import romanianDeadlift from "../exercise-objects/romanian-deadlift"
import walkingLunges from "../exercise-objects/walking-lunges"
import singleLegExtension from "../exercise-objects/single-leg-extension"
import calfPress from "../exercise-objects/calf-press"
//Second cycle legs
import deadliftConventional from "../exercise-objects/deadlift-conventional"
import frontSquats from "../exercise-objects/front-squats"
import squatBulgarianSplitBar from "../exercise-objects/squat-bulgarian-split-bar"
import hipThrustBar from "../exercise-objects/hip-thrust-bar"
import squatGobletEccentric from "../exercise-objects/squat-goblet-eccentric"
import legCurlSeatedEccentric from "../exercise-objects/leg-curl-seated-eccentric"
import hipAbductionsSeated from "../exercise-objects/hip-abductions-seated"
import standingCalfRaise from "../exercise-objects/standing-calf-raise"
//third cycle legs
import splitSquat from "../exercise-objects/split-squat"
import gluteHamRaises from "../exercise-objects/glute-ham-raises"
import singleLegCalfPress from "../exercise-objects/single-leg-calf-press"
import standingSingleCalfRaise from "../exercise-objects/standing-single-calf-raise"

export default 
{
    id: "1916393263234394",
    name: "Divi Split",
    difficulty: 3.5,
    focus: 'Strength Building',
    description: 'Venenatis maecenas at ullamcorper risus iaculis at imperdiet nulla. Amet sed est porttitor ridiculus elementum. Non sem leo nunc quisque. Nec lobortis nisl blandit viverra amet tortor lorem elit mattis. Integer hendrerit egestas blandit at blandit ut. Arcu faucibus vitae in leo gravida auctor. Purus erat lacus enim viverra curabitur. Malesuada tempor neque in sed habitasse mi. Magna tristique consectetur commodo duis cursus enim massa. Mi varius posuere amet est. Tristique nisl ipsum massa eu dui sed feugiat et.',
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
                    name: "Push Day",
                    order: 1,
                    exercises : [
                        {
                            exercise_id: benchPress.id,
                            name: benchPress.name,
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
                            name: inclineCableFly.name,
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
                            name: shoulderPressStanding.name,
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
                            name: egyptianLateralRaises.name,
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
                            name: cablePushdowns.name,
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
                            name: ropeFacePull.name,
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
                    order: 1,
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
                            name: pullUps.name,
                            workout_data: {
                                order: 1,
                                rep_end: 10,
                                rep_start: 6,
                                rest_increment: 30,
                                rest_initial: 150,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: barbellRow.id,
                            name: barbellRow.name,
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
                            name: chestSupportedRearDeltRow.name,
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
                            name: barbellCurlNarrowGrip.name,
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
                            name: preacherCurls.name,
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
                            name: facePullsKneeling.name,
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
                            name: facePullsLying.name,
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
                    order: 1,
                    exercises : [
                        {
                            exercise_id: deadliftConventional.id,
                            name: deadliftConventional.name,
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
                            name: squatBulgarianSplitBar.name,
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
                            name: hipThrustBar.name,
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
                            name: squatGobletEccentric.name,
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
                            name: legCurlSeatedEccentric.name,
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
                            name: hipAbductionsSeated.name,
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
                            exercise_id: singleLegCalfPress.id,
                            name: singleLegCalfPress.name,
                            workout_data: {
                                order: 7,
                                rep_end: 10,
                                rep_start: 10,
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
