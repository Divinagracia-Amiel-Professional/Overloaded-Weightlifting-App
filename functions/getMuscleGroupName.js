const getExerciseGroupName = (group) => {
    const wordLength = group.wordLength

    const firstLetter = group.charAt(0).toUpperCase()
    const subsequents = group.slice(1, wordLength)

    const capitalized = firstLetter + subsequents

    return capitalized
}

export default getExerciseGroupName