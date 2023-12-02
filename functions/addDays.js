const addDays = (current, days) => {
    days = days || 0
    const future = new Date(current)

    future.setDate(future.getDate() + days)

    return future
}

export default addDays