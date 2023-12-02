const getLocalDateTime = () => {
    let date = new Date();
    const milliseconds = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    );

    return new Date(milliseconds);
}

export default getLocalDateTime