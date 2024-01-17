import benchPress from "../exercise-objects/bench-press"
import inclinedBarbellBenchPress from "../exercise-objects/inclined-barbell-bench-press"
import wideCablePullOver from "../exercise-objects/wide-cable-pull-over"
import reverseGripPullup from "../exercise-objects/reverse-grip-pullup"
import barbellRow from "../exercise-objects/barbell-row"
import deadliftConventional from "../exercise-objects/deadlift-conventional"

import shoulderPressStanding from "../exercise-objects/shoulder-press-standing"
import dumbbellLateralRaise from "../exercise-objects/dumbbell-lateral-raise"
import arnoldPress from "../exercise-objects/arnold-press"
import ezBarbellCurl from "../exercise-objects/ez-barbell-curl"
import dumbbellCurls from "../exercise-objects/dumbbell-curls"
import inclinedDumbbellOverheadExtension from "../exercise-objects/inclined-dumbbell-overhead-extension"
import reverseWristCurls from "../exercise-objects/reverse-wrist-curls"
import reverseCrunch from "../exercise-objects/reverse-crunch"

import backSquats from "../exercise-objects/back-squats"
import walkingLunges from "../exercise-objects/walking-lunges"
import legCurlSeatedEccentric from "../exercise-objects/leg-curl-seated-eccentric"
import standingCalfRaise from "../exercise-objects/standing-calf-raise"
import romanianDeadlift from "../exercise-objects/romanian-deadlift"

import singleLegCalfPress from "../exercise-objects/single-leg-calf-press"

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
    cycles: [
        {
          order: 1,
          split: [
            {
              name: "Chest and Back",
              order: 1,
              exercises: [
                {
                  exercise_id: benchPress.id,
                  name: benchPress.name,
                  workout_data: {
                    order: 1,
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 4
                  }
                },
                {
                  exercise_id: inclinedBarbellBenchPress.id,
                  name: inclinedBarbellBenchPress.name,
                  workout_data: {
                    order: 2,
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 4
                  }
                },
                {
                  exercise_id: wideCablePullOver.id,
                  name: wideCablePullOver.name,
                  workout_data: {
                    order: 3,
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 4
                  }
                },
                {
                  exercise_id: reverseGripPullup.id,
                  name: reverseGripPullup.name,
                  workout_data: {
                    order: 4,
                    rep_end: 10,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 5
                  }
                },
                {
                  exercise_id: barbellRow.id,
                  name: barbellRow.name,
                  workout_data: {
                    order: 5,
                    rep_end: 15,
                    rep_start: 8,
                    rest_increment: 0,
                    rest_initial: 60,
                    set_count: 5
                  }
                },
                {
                  exercise_id: deadliftConventional.id,
                  name: deadliftConventional.name,
                  workout_data: {
                    order: 6,
                    rep_end: 10,
                    rep_start: 4,
                    rest_increment: 0,
                    rest_initial: 180,
                    set_count: 3
                  }
                }
              ]
            },
            {
              name: "Arms",
              order: 2,
              exercises: [
                {
                  exercise_id: shoulderPressStanding.id,
                  name: shoulderPressStanding.name,
                  workout_data: {
                    order: 1,
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 4
                  }
                },
                {
                  exercise_id: dumbbellLateralRaise.id,
                  name: dumbbellLateralRaise.name,
                  workout_data: {
                    order: 2,
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 4
                  }
                },
                {
                  exercise_id: arnoldPress.id,
                  name: arnoldPress.name,
                  workout_data: {
                    order: 3,
                    rep_end: 6,
                    rep_start: 2,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 3
                  }
                },
                {
                  exercise_id: ezBarbellCurl.id,
                  name: ezBarbellCurl.name,
                  workout_data: {
                    order: 4,
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 4
                  }
                },
                {
                  exercise_id: dumbbellCurls.id,
                  name: dumbbellCurls.name,
                  workout_data: {
                    order: 5,
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 60,
                    set_count: 4
                  }
                },
                {
                  exercise_id: inclinedDumbbellOverheadExtension.id,
                  name: inclinedDumbbellOverheadExtension.name,
                  workout_data: {
                    order: 6,
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 60,
                    set_count: 4
                  }
                },
                {
                  exercise_id: reverseWristCurls.id,
                  name: reverseWristCurls.name,
                  workout_data: {
                    order: 7,
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 60,
                    set_count: 4
                  }
                },
                {
                  exercise_id: reverseCrunch.id,
                  name: reverseCrunch.name,
                  workout_data: {
                    order: 8,
                    rep_end: 25,
                    rep_start: 25,
                    rest_increment: 0,
                    rest_initial: 60,
                    set_count: 5
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
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 180,
                    set_count: 4
                  }
                },
                {
                  exercise_id: walkingLunges.id,
                  name: walkingLunges.name,
                  workout_data: {
                    order: 2,
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 4
                  }
                },
                {
                  exercise_id: legCurlSeatedEccentric.id,
                  name: legCurlSeatedEccentric.name,
                  workout_data: {
                    order: 3,
                    rep_end: 15,
                    rep_start: 6,
                    rest_increment: 0,
                    rest_initial: 90,
                    set_count: 4
                  }
                },
                {
                  exercise_id: standingCalfRaise.id,
                  name: standingCalfRaise.name,
                  workout_data: {
                    order: 4,
                    rep_end: 15,
                    rep_start: 15,
                    rest_increment: 0,
                    rest_initial: 60,
                    set_count: 5
                  }
                },
                {
                  exercise_id: romanianDeadlift.id,
                  name: romanianDeadlift.name,
                  workout_data: {
                    order: 5,
                    rep_end: 10,
                    rep_start: 4,
                    rest_increment: 0,
                    rest_initial: 120,
                    set_count: 3
                  }
                },
                {
                  exercise_id: reverseCrunch.id,
                  name: reverseCrunch.name,
                  workout_data: {
                    order: 6,
                    rep_end: 8,
                    rep_start: 6,
                    rest_increment: 30,
                    rest_initial: 60,
                    set_count: 3
                  }
                }
              ]
            }
          ]
        }
      ]
}   