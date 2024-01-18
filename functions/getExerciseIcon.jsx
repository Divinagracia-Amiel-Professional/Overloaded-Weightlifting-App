import { Abs, Legs, PullUp, PushUp } from '../constants/icons'
import Feather from '@expo/vector-icons/Feather'

const getExerciseIcon = (exerciseData, theme, customScale) => {
    const thisExerciseGroup = exerciseData.group
    const scale = customScale ? customScale : 2.5 

    if(thisExerciseGroup.includes('legs')){
        return <Legs width={30} height={30} scale={scale} fill={theme.colors.secondary}/>
    } else if(thisExerciseGroup.includes('pull') || thisExerciseGroup.includes('back')){
        return <PullUp width={30} height={30} scale={scale} fill={theme.colors.secondary}/>
    } else if(thisExerciseGroup.includes('push') || thisExerciseGroup.includes('chest')){
        return <PushUp width={30} height={30} scale={scale} fill={theme.colors.secondary}/>
    } else if(thisExerciseGroup.includes('core')){
        return <Abs width={30} height={30} scale={scale} fill={'transparent'} strokeColor={theme.colors.secondary}/>
    } else {
        return <Feather name={'image'} size={75} color={theme.colors.secondary} />
    }
}

export default getExerciseIcon