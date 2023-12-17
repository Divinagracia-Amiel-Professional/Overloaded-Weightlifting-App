const formatData = (data, type) => {
    let formattedData 
    switch (type) {
      case 'cycle':
        formattedData = data.map(cycle => {
          return({
            order: cycle.order,
            name: `Cycle ${cycle.order}`,
            data: cycle,
            type: type
          })
        })
        break;
      case 'split':
        formattedData = data.map(split => ({
          order: split.order,
          name: split.name,
          data: split,
          type: type
        }))
        break;
      case 'exercise':
        formattedData = data.map(exercise => ({
          order: exercise.workoutData.order,
          name: exercise.name,
          data: exercise,
          type: type
        }))
        break;
    }

    return formattedData
}

export default formatData