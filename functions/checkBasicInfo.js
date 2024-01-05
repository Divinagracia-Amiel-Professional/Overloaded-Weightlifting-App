const checkBasicInfo = (basicInfo) => {
    console.log(basicInfo.name)
    const basicInfoMessages = []
    
    if(!basicInfo.name){
        basicInfoMessages.push('- Name')
    }

    if(!basicInfo.focus){
        basicInfoMessages.push('- Focus')
    }

    const hasError = basicInfoMessages.length !== 0
    const message = basicInfoMessages[0] ? 
        `Basic Info has missing: \n${basicInfoMessages.join(`\n`)}\n\n` :
        ''

    return {hasError, message}
}

export default checkBasicInfo