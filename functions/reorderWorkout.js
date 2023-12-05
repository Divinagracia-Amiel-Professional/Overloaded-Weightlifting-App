//This only takes the cycle array

export default function reorderWorkout(data){
    let count = 0
    const cycles = data
    const toConvert = cycles.map(cycle => {
        let splitCount = 0
        count++
        return({
            order: count,
            split: cycle.split.map(split => {
                splitCount++
                return({
                    ...split,
                    order: splitCount,
                    exercises: []
                })
            })
        })
    })

    return toConvert
}