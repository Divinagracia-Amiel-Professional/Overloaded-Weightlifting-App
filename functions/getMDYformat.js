const monthsInAYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

const getMDYFormat = (dateString) => {//takes in string date
    const year = dateString.slice(0,4)
    const month = dateString.slice(5,7)
    const day = dateString.slice(8,10)
    const hour = dateString.slice(11, 13)
    const minute = dateString.slice(14, 16)

    return `${monthsInAYear[parseInt(month) - 1]} ${day}, ${year} - ${get12HFormat(hour, minute)}`
}

const get12HFormat = (hour, minute) => {
    const hourNum = parseInt(hour)
    const minNum = parseInt(minute)

    const isAM = parseInt(hour/12) === 0
    const hourFormatted = hourNum === 12 || hourNum === 0 ? `12` : (isAM ? hourNum : parseInt(hourNum % 12))
    const minuteFormatted = minNum >= 10 ? minNum : `0${minNum}`
    const suffix = isAM ? 'AM' : 'PM'

    return `${hourFormatted}:${minuteFormatted} ${suffix}`
}

export default getMDYFormat
export {
    get12HFormat
}