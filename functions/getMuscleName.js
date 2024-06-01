const getMuscleName = (muscle) => {
    switch(muscle){
        case 'chest_upper':
            return 'Upper Chest'
        case 'chest_lower':
            return 'Lower Chest'
        case 'delts_front':
            return 'Anterior Deltoids'
        case 'delts_mid':
            return 'Medial Deltoids'
        case 'delts_back':
            return 'Posterior Deltoids'
        case 'core_upper':
            return 'Upper Abs'
        case 'core_lower':
            return 'Lower Abs'
        case 'core_oblique':
            return 'Obliques'
        case 'bicep_short':
            return 'Biceps Short Head'
        case 'bicep_long':
            return 'Biceps Long Head'
        case 'forearm':
            return 'Forearms'
        case 'tri_long':
            return 'Triceps Long Head'
        case 'tri_lat':
            return 'Triceps Lateral Head'
        case 'tri_mid':
            return 'Triceps Medial Head'
        case 'lats':
            return 'Latissimus Dorsi'
        case 'traps_upper':
            return 'Upper Trapezius'
        case 'traps_lower':
            return 'Lower Trapezius'
        case 'traps':
            return 'Trapezius'
        case 'erector':
            return 'Spinae Erector'
        case 'erectors':
            return 'Spinae Erector'
        case 'teres_major':
            return 'Teres Major'
        case 'rot_cuffs':
            return 'Rotator Cuffs'
        case 'quad':
            return 'Quadriceps'
        case 'calves':
            return 'Calves'
        case 'hams':
            return 'Hamstrings'
        case 'glut_max':
            return 'Gluteus Maximus'
        case 'glut_min':
            return 'Gluteus Minimus'
        case 'glut_mid':
            return 'Gluteus Medius'
        case 'glutes':
            return 'Gluteus'
        case 'adducts':
            return 'Adductors'
        case 'adductors':
            return 'Adductors'
        case 'stretches':
            return 'Stretches'
        case 'core':
            return 'Core'
    }
}

export default getMuscleName