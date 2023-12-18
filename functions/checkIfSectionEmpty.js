export default function checkIfExerciseEmpty(cycle){ //takes in cycles
    // let isEmpty = false

    // if(!cycle[0]){
    //     return isEmpty = true
    // }

    // console.log('cycles is Empty: ' + isEmpty)

    // const checkSplit = cycle.some(cycle => {
    //     return cycle.split.length === 0
    // });
    
    // console.log('splits isEmpty: ' + checkSplit)

    const checkExercises = cycle.some(cycle => {
        return cycle.split.some(split => split.exercises.length === 0)
    });

    // const emptySplits = cycle.filter(cycle => {
    //     return cycle.split.some(split => split.exercises.length === 0)
    // });

    const emptySplits = cycle.map(cycle => {
        // const cycles = 
        const emptySplits = cycle.split.filter(split => split.exercises.length === 0)
        return({
            cycle: cycle.order,
            emptySplits: emptySplits
        })
    });

    const filtered = emptySplits.filter(cycle => {
        return cycle.emptySplits.some(split => split.length !== 0)
    })

    return {checkExercises, filtered}
}