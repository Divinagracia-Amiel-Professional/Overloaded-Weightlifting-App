import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import getExercisesFromWorkoutRedux from '../../custom-hooks/getExercisesFromWorkoutRedux';
import DraggableSortableList from '../do-workout-components/draggable-sortable-list';

export default function TestDBComponent(){

    return(
        <View>
            <DraggableSortableList />
        </View>
    )
}
