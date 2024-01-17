import inclinedBarbellBenchPress from "../exercise-objects/inclined-barbell-bench-press"
import inclineCableFly from "../exercise-objects/incline-cable-fly"
import declinedCableFly from "../exercise-objects/declined-cable-fly"
import closeGripBenchPress from "../exercise-objects/close-grip-bench-press"
import pullUps from "../exercise-objects/pull-ups"
import latPulldowns from "../exercise-objects/lat-pulldowns"
import barbellRow from "../exercise-objects/barbell-row"
import chestSupportedRearDeltRow from "../exercise-objects/chest-supported-rear-delt-row"
import wideCablePullOver from "../exercise-objects/wide-cable-pull-over"

import machineShoulderPress from "../exercise-objects/machine-shoulder-press"
import dumbbellLateralRaise from "../exercise-objects/dumbbell-lateral-raise"
import egyptianLateralRaises from "../exercise-objects/egyptian-lateral-raises"
import ropeUprightRow from "../exercise-objects/rope-upright-row"
import dumbbellRearDeltRaise from "../exercise-objects/dumbbell-rear-delt-raise"

import backSquats from "../exercise-objects/back-squats"
import squatBulgarianSplitBar from "../exercise-objects/squat-bulgarian-split-bar"
import singleLegExtension from "../exercise-objects/single-leg-extension"
import legCurlSeatedEccentric from "../exercise-objects/leg-curl-seated-eccentric"
import standingCalfRaise from "../exercise-objects/standing-calf-raise"
import calfPress from "../exercise-objects/calf-press"

import ezBarbellCurl from "../exercise-objects/ez-barbell-curl"
import inclinedDumbbellCurl from "../exercise-objects/inclined-dumbbell-curl"
import barbellCurlNarrowGrip from "../exercise-objects/barbell-curl-narrow-grip"
import cablePushdowns from "../exercise-objects/cable-pushdowns"
import inclinedDumbbellOverheadExtension from "../exercise-objects/inclined-dumbbell-overhead-extension"
import reverseWristCurls from "../exercise-objects/reverse-wrist-curls"


export default 
{
    id: "6826531258407899",
    name: "Tom Platz Split",
    difficulty: 5,
    focus: 'Legs',
    description: '',
    latest_state: {
        is_completed: false,
        date_used: '',
        cycle: 1,
        split: 1,
        name: 'Leg Day'
    },
    cycles: [
        {
          order: 1,
          split: [
            {
              name: "Chest and Back",
              order: 1,
              exercises: [
                {
                  exercise_id: inclinedBarbellBenchPress.id,
                  name: inclinedBarbellBenchPress.name,
                  workout_data: {
                    order: 1,
                    rep_end: 20,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 150,
                    set_count: 6
                  }
                },
                {
                  exercise_id: inclineCableFly.id,
                  name: inclineCableFly.name,
                  workout_data: {
                    order: 2,
                    rep_end: 20,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 6
                  }
                },
                {
                  exercise_id: declinedCableFly.id,
                  name: declinedCableFly.name,
                  workout_data: {
                    order: 3,
                    rep_end: 20,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 6
                  }
                },
                {
                  exercise_id: closeGripBenchPress.id,
                  name: closeGripBenchPress.name,
                  workout_data: {
                    order: 4,
                    rep_end: 8,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 4
                  }
                },
                {
                  exercise_id: pullUps.id,
                  name: pullUps.name,
                  workout_data: {
                    order: 5,
                    rep_end: 30,
                    rep_start: 15,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 10
                  }
                },
                {
                  exercise_id: latPulldowns.id,
                  name: latPulldowns.name,
                  workout_data: {
                    order: 6,
                    rep_end: 40,
                    rep_start: 20,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 10
                  }
                },
                {
                  exercise_id: barbellRow.id,
                  name: barbellRow.name,
                  workout_data: {
                    order: 7,
                    rep_end: 15,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 6
                  }
                },
                {
                  exercise_id: chestSupportedRearDeltRow.id,
                  name: chestSupportedRearDeltRow.name,
                  workout_data: {
                    order: 8,
                    rep_end: 15,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 5
                  }
                },
                {
                  exercise_id: wideCablePullOver.id,
                  name: wideCablePullOver.name,
                  workout_data: {
                    order: 9,
                    rep_end: 15,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 5
                  }
                }
              ]
            },
            {
              name: "Shoulder",
              order: 2,
              exercises: [
                {
                  exercise_id: machineShoulderPress.id,
                  name: machineShoulderPress.name,
                  workout_data: {
                    order: 1,
                    rep_end: 30,
                    rep_start: 12,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 8
                  }
                },
                {
                  exercise_id: dumbbellLateralRaise.id,
                  name: dumbbellLateralRaise.name,
                  workout_data: {
                    order: 2,
                    rep_end: 25,
                    rep_start: 12,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 5
                  }
                },
                {
                  exercise_id: egyptianLateralRaises.id,
                  name: egyptianLateralRaises.name,
                  workout_data: {
                    order: 3,
                    rep_end: 20,
                    rep_start: 12,
                    rest_increment: 0,
                    rest_initial: 60,
                    set_count: 4
                  }
                },
                {
                  exercise_id: ropeUprightRow.id,
                  name: ropeUprightRow.name,
                  workout_data: {
                    order: 4,
                    rep_end: 15,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 4
                  }
                },
                {
                  exercise_id: dumbbellRearDeltRaise.id,
                  name: dumbbellRearDeltRaise.name,
                  workout_data: {
                    order: 5,
                    rep_end: 20,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 4
                  }
                },
                {
                  exercise_id: chestSupportedRearDeltRow.id,
                  name: chestSupportedRearDeltRow.name,
                  workout_data: {
                    order: 6,
                    rep_end: 15,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 4
                  }
                }
              ]
            },
            {
              name: "Legs",
              order: 3,
              exercises: [
                {
                  exercise_id: backSquats.id,
                  name: backSquats.name,
                  workout_data: {
                    order: 1,
                    rep_end: 30,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 10
                  }
                },
                {
                  exercise_id: squatBulgarianSplitBar.id,
                  name: squatBulgarianSplitBar.name,
                  workout_data: {
                    order: 2,
                    rep_end: 20,
                    rep_start: 15,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 3
                  }
                },
                {
                  exercise_id: singleLegExtension.id,
                  name: singleLegExtension.name,
                  workout_data: {
                    order: 3,
                    rep_end: 15,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 8
                  }
                },
                {
                  exercise_id: legCurlSeatedEccentric.id,
                  name: legCurlSeatedEccentric.name,
                  workout_data: {
                    order: 4,
                    rep_end: 20,
                    rep_start: 7,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 8
                  }
                },
                {
                  exercise_id: standingCalfRaise.id,
                  name: standingCalfRaise.name,
                  workout_data: {
                    order: 5,
                    rep_end: 15,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 60,
                    set_count: 4
                  }
                },
                {
                  exercise_id: calfPress.id,
                  name: calfPress.name,
                  workout_data: {
                    order: 6,
                    rep_end: 15,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 60,
                    set_count: 4
                  }
                }
              ]
            },
            {
              name: "Arms",
              order: 4,
              exercises: [
                {
                  exercise_id: ezBarbellCurl.id,
                  name: ezBarbellCurl.name,
                  workout_data: {
                    order: 1,
                    rep_end: 15,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 4
                  }
                },
                {
                  exercise_id: inclinedDumbbellCurl.id,
                  name: inclinedDumbbellCurl.name,
                  workout_data: {
                    order: 2,
                    rep_end: 20,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 4
                  }
                },
                {
                  exercise_id: barbellCurlNarrowGrip.id,
                  name: barbellCurlNarrowGrip.name,
                  workout_data: {
                    order: 3,
                    rep_end: 20,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 4
                  }
                },
                {
                  exercise_id: cablePushdowns.id,
                  name: cablePushdowns.name,
                  workout_data: {
                    order: 4,
                    rep_end: 20,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 4
                  }
                },
                {
                  exercise_id: closeGripBenchPress.id,
                  name: closeGripBenchPress.name,
                  workout_data: {
                    order: 5,
                    rep_end: 20,
                    rep_start: 10,
                    rest_increment: 0,
                    rest_initial: 135,
                    set_count: 4
                  }
                },
                {
                  exercise_id: inclinedDumbbellOverheadExtension.id,
                  name: inclinedDumbbellOverheadExtension.name,
                  workout_data: {
                    order: 6,
                    rep_end: 30,
                    rep_start: 15,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 4
                  }
                },
                {
                  exercise_id: reverseWristCurls.id,
                  name: reverseWristCurls.name,
                  workout_data: {
                    order: 7,
                    rep_end: 30,
                    rep_start: 20,
                    rest_increment: 0,
                    rest_initial: 60,
                    set_count: 6
                  }
                }
              ]
            }
          ]
        }
      ]
}   