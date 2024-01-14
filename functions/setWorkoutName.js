export default function setWorkoutName(cycle, name){
    let suffix
    switch (cycle){
        case 1:
            suffix = 'st';
            break;
        case 2:
            suffix = 'nd';
            break;
        case 3:
            suffix = 'rd';
            break;
        default: 
            suffix = 'th';
    }

    return `${cycle}${suffix} Cycle ${name}`
}