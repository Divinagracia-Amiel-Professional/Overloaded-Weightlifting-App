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

//other imports
import seatedSingleLegCurl from "../exercise-objects/seated-single-leg-curl"
import eccentricLatPulldown from "../exercise-objects/eccentric-lat-pulldown"
import enhancedEccentricEzBarCurl from "../exercise-objects/enhanced-eccentric-ez-bar-curl"

import machineSeatedHipAbduction from "../exercise-objects/machine-seated-hip-abduction"

export default 
{
    id: "1916393263234394",
    name: "Divi Split",
    difficulty: 3.5,
    focus: 'Strength Building',
    description: 'This workout regimen is a comprehensive and well-structured three-cycle-three-day split, targeting push, pull, and leg muscle groups, with additional focus on forearms and abs. The push workouts emphasize chest, shoulders, and triceps, incorporating compound movements like bench press and isolation exercises for balanced development. Pull workouts center around the back, incorporating a mix of rows, lat pull-downs, and bicep exercises. Leg workouts feature compound movements such as squats and deadlifts, along with isolation exercises for a complete lower-body workout. Forearm and abdominal exercises are included for added strength and aesthetics. The routine also integrates specific instructions for progression and holds, contributing to a balanced and holistic approach to strength training.',
    latest_state: {
        is_completed: false,
        date_used: '',
        cycle: 1,
        split: 1,
        name: 'Push Day'
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
                },
                {
                    name: "Pull Day",
                    order: 2,
                    exercises : [
                        {
                            exercise_id: rackPull.id,
                            name: rackPull.name,
                            workout_data: {
                                order: 1,
                                rep_end: 8,
                                rep_start: 6,
                                rest_increment: 30,
                                rest_initial: 150,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: meadowsRow.id,
                            name: meadowsRow.name,
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
                            exercise_id: omniGripLatPulldowns.id,
                            name: omniGripLatPulldowns.name,
                            workout_data: {
                                order: 3,
                                rep_end: 15,
                                rep_start: 12,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: ropeFacePull.id,
                            name: ropeFacePull.name,
                            workout_data: {
                                order: 4,
                                rep_end: 20,
                                rep_start: 15,
                                rest_increment: 30,
                                rest_initial: 75,
                                set_count: 2
                            }
                        },
                        {
                            exercise_id: reversePecDeck.id,
                            name: reversePecDeck.name,
                            workout_data: {
                                order: 5,
                                rep_end: 20,
                                rep_start: 15,
                                rest_increment: 30,
                                rest_initial: 75,
                                set_count: 2
                            }
                        },
                        {
                            exercise_id: dumbbellRearDeltRaise.id,
                            name: dumbbellRearDeltRaise.name,
                            workout_data: {
                                order: 6,
                                rep_end: 20,
                                rep_start: 15,
                                rest_increment: 0,
                                rest_initial: 75,
                                set_count: 2
                            }
                        },
                        {
                            exercise_id: ezBarbellCurl.id,
                            name: ezBarbellCurl.name,
                            workout_data: {
                                order: 7,
                                rep_end: 8,
                                rep_start: 6,
                                rest_increment: 0,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: inclinedDumbbellCurl.id,
                            name: inclinedDumbbellCurl.name,
                            workout_data: {
                                order: 8,
                                rep_end: 10,
                                rep_start: 8,
                                rest_increment: 0,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                    ]
                },
                {
                    name: "Leg Day",
                    order: 3,
                    exercises : [
                        {
                            exercise_id: backSquats.id,
                            name: backSquats.name,
                            workout_data: {
                                order: 1,
                                rep_end: 6,
                                rep_start: 4,
                                rest_increment: 30,
                                rest_initial: 180,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: romanianDeadlift.id,
                            name: romanianDeadlift.name,
                            workout_data: {
                                order: 2,
                                rep_end: 15,
                                rep_start: 8,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: walkingLunges.id,
                            name: walkingLunges.name,
                            workout_data: {
                                order: 3,
                                rep_end: 20,
                                rep_start: 20,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: singleLegExtension.id,
                            name: singleLegExtension.name,
                            workout_data: {
                                order: 4,
                                rep_end: 10,
                                rep_start: 10,
                                rest_increment: 30,
                                rest_initial: 75,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: seatedSingleLegCurl.id,
                            name: seatedSingleLegCurl.name,
                            workout_data: {
                                order: 5,
                                rep_end: 12,
                                rep_start: 12,
                                rest_increment: 30,
                                rest_initial: 75,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: singleLegCalfPress.id,
                            name: singleLegCalfPress.name,
                            workout_data: {
                                order: 6,
                                rep_end: 10,
                                rep_start: 10,
                                rest_increment: 0,
                                rest_initial: 75,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: calfPress.id,
                            name: calfPress.name,
                            workout_data: {
                                order: 7,
                                rep_end: 20,
                                rep_start: 20,
                                rest_increment: 0,
                                rest_initial: 105,
                                set_count: 3
                            }
                        },
                    ]
                },
            ],
        },
        {
            order: 2,
            split : [
                {
                    name: "Push Day",
                    order: 1,
                    exercises : [
                        {
                            exercise_id: shoulderPressStanding.id,
                            name: shoulderPressStanding.name,
                            workout_data: {
                                order: 1,
                                rep_end: 8,
                                rep_start: 6,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: closeGripBenchPress.id,
                            name: closeGripBenchPress.name,
                            workout_data: {
                                order: 2,
                                rep_end: 10,
                                rep_start: 8,
                                rest_increment: 30,
                                rest_initial: 150,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: declinedCableFly.id,
                            name: declinedCableFly.name,
                            workout_data: {
                                order: 3,
                                rep_end: 12,
                                rep_start: 10,
                                rest_increment: 30,
                                rest_initial: 150,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: ropeUprightRow.id,
                            name: ropeUprightRow.name,
                            workout_data: {
                                order: 4,
                                rep_end: 15,
                                rep_start: 12,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: dumbbellLateralRaise.id,
                            name: dumbbellLateralRaise.name,
                            workout_data: {
                                order: 5,
                                rep_end: 15,
                                rep_start: 12,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: overheadCableTricepsExtension.id,
                            name: overheadCableTricepsExtension.name,
                            workout_data: {
                                order: 6,
                                rep_end: 15,
                                rep_start: 12,
                                rest_increment: 0,
                                rest_initial: 90,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: elevatedTrianglePushUps.id,
                            name: elevatedTrianglePushUps.name,
                            workout_data: {
                                order: 7,
                                rep_end: 20,
                                rep_start: 15,
                                rest_increment: 0,
                                rest_initial: 180,
                                set_count: 2
                            }
                        },
                    ]
                },
                {
                    name: "Pull Day",
                    order: 2,
                    exercises : [
                        {
                            exercise_id: eccentricLatPulldown.id,
                            name: eccentricLatPulldown.name,
                            workout_data: {
                                order: 1,
                                rep_end: 10,
                                rep_start: 8,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: chestSupportedRearDeltRow.id,
                            name: chestSupportedRearDeltRow.name,
                            workout_data: {
                                order: 2,
                                rep_end: 12,
                                rep_start: 10,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: machineHighLowRow.id,
                            name: machineHighLowRow.name,
                            workout_data: {
                                order: 3,
                                rep_end: 15,
                                rep_start: 12,
                                rest_increment: 30,
                                rest_initial: 75,
                                set_count: 2
                            }
                        },
                        {
                            exercise_id: wideCablePullOver.id,
                            name: wideCablePullOver.name,
                            workout_data: {
                                order: 4,
                                rep_end: 20,
                                rep_start: 15,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: snatchGripBarbellShrug.id,
                            name: snatchGripBarbellShrug.name,
                            workout_data: {
                                order: 5,
                                rep_end: 15,
                                rep_start: 12,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: reversePecDeck.id,
                            name: reversePecDeck.name,
                            workout_data: {
                                order: 6,
                                rep_end: 12,
                                rep_start: 12,
                                rest_increment: 0,
                                rest_initial: 60,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: dumbbellRearDeltRaise.id,
                            name: dumbbellRearDeltRaise.name,
                            workout_data: {
                                order: 7,
                                rep_end: 12,
                                rep_start: 12,
                                rest_increment: 0,
                                rest_initial: 60,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: enhancedEccentricEzBarCurl.id,
                            name: enhancedEccentricEzBarCurl.name,
                            workout_data: {
                                order: 8,
                                rep_end: 10,
                                rep_start: 8,
                                rest_increment: 0,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: dumbbellCurls.id,
                            name: dumbbellCurls.name,
                            workout_data: {
                                order: 9,
                                rep_end: 30,
                                rep_start: 30,
                                rest_increment: 0,
                                rest_initial: 90,
                                set_count: 2
                            }
                        },
                    ]
                },
                {
                    name: "Leg Day",
                    order: 3,
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
                                rep_end: 8,
                                rep_start: 6,
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
                            exercise_id: machineSeatedHipAbduction.id,
                            name: machineSeatedHipAbduction.name,
                            workout_data: {
                                order: 6,
                                rep_end: 30,
                                rep_start: 30,
                                rest_increment: 0,
                                rest_initial: 75,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: standingSingleCalfRaise.id,
                            name: standingSingleCalfRaise.name,
                            workout_data: {
                                order: 7,
                                rep_end: 10,
                                rep_start: 10,
                                rest_increment: 0,
                                rest_initial: 60,
                                set_count: 3
                            }
                        },
                    ]
                },
            ],
        },
        {
            order: 3,
            split : [
                {
                    name: "Push Day",
                    order: 1,
                    exercises : [
                        {
                            exercise_id: inclinedBarbellBenchPress.id,
                            name: inclinedBarbellBenchPress.name,
                            workout_data: {
                                order: 1,
                                rep_end: 8,
                                rep_start: 6,
                                rest_increment: 30,
                                rest_initial: 150,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: arnoldPress.id,
                            name: arnoldPress.name,
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
                            exercise_id: pausedFlatDumbbellPress.id,
                            name: pausedFlatDumbbellPress.name,
                            workout_data: {
                                order: 3,
                                rep_end: 12,
                                rep_start: 8,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: leanAwayLateralRaise.id,
                            name: leanAwayLateralRaise.name,
                            workout_data: {
                                order: 4,
                                rep_end: 15,
                                rep_start: 10,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: declinedCableFly.id,
                            name: declinedCableFly.name,
                            workout_data: {
                                order: 5,
                                rep_end: 15,
                                rep_start: 10,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: inclinedDumbbellOverheadExtension.id,
                            name: inclinedDumbbellOverheadExtension.name,
                            workout_data: {
                                order: 6,
                                rep_end: 15,
                                rep_start: 10,
                                rest_increment: 0,
                                rest_initial: 60,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: cableTricepKickbacks.id,
                            name: cableTricepKickbacks.name,
                            workout_data: {
                                order: 7,
                                rep_end: 12,
                                rep_start: 8,
                                rest_increment: 0,
                                rest_initial: 60,
                                set_count: 3
                            }
                        },
                    ]
                },
                {
                    name: "Pull Day",
                    order: 2,
                    exercises : [
                        {
                            exercise_id: pullUps.id,
                            name: pullUps.name,
                            workout_data: {
                                order: 1,
                                rep_end: 10,
                                rep_start: 8,
                                rest_increment: 30,
                                rest_initial: 120,
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
                            exercise_id: reverseGripPullup.id,
                            name: reverseGripPullup.name,
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
                            exercise_id: chestSupportedRearDeltRow.id,
                            name: chestSupportedRearDeltRow.name,
                            workout_data: {
                                order: 4,
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
                                order: 5,
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
                                order: 6,
                                rep_end: 12,
                                rep_start: 8,
                                rest_increment: 30,
                                rest_initial: 60,
                                set_count: 3
                            }
                        },
                        {
                            exercise_id: facePullsKneeling.id,
                            name: facePullsKneeling.name,
                            workout_data: {
                                order: 7,
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
                                order: 8,
                                rep_end: 15,
                                rep_start: 10,
                                rest_increment: 0,
                                rest_initial: 60,
                                set_count: 2
                            }
                        },
                    ]
                },
                {
                    name: "Leg Day",
                    order: 3,
                    exercises : [
                        {
                            exercise_id: backSquats.id,
                            name: backSquats.name,
                            workout_data: {
                                order: 1,
                                rep_end: 10,
                                rep_start: 6,
                                rest_increment: 30,
                                rest_initial: 180,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: hipThrustBar.id,
                            name: hipThrustBar.name,
                            workout_data: {
                                order: 2,
                                rep_end: 15,
                                rep_start: 12,
                                rest_increment: 30,
                                rest_initial: 120,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: splitSquat.id,
                            name: splitSquat.name,
                            workout_data: {
                                order: 3,
                                rep_end: 12,
                                rep_start: 8,
                                rest_increment: 30,
                                rest_initial: 105,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: gluteHamRaises.id,
                            name: gluteHamRaises.name,
                            workout_data: {
                                order: 4,
                                rep_end: 15,
                                rep_start: 10,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: standingSingleCalfRaise.id,
                            name: standingSingleCalfRaise.name,
                            workout_data: {
                                order: 5,
                                rep_end: 10,
                                rep_start: 6,
                                rest_increment: 30,
                                rest_initial: 90,
                                set_count: 4
                            }
                        },
                        {
                            exercise_id: standingCalfRaise.id,
                            name: standingCalfRaise.name,
                            workout_data: {
                                order: 6,
                                rep_end: 15,
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
