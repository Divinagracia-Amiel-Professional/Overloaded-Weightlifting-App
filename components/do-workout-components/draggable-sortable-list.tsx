import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import DragList, { DragListRenderItemInfo } from 'react-native-draglist'
import getExercisesFromWorkoutRedux from '../../custom-hooks/getExercisesFromWorkoutRedux'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'

// const SOUND_OF_SILENCE = ['hello', 'darkness', 'my', 'old', 'friend'];

export default function DraggableSortableList(props) {
  const exercises = getExercisesFromWorkoutRedux('divisplitID', 2, 3)
  // const [data, setData] = useState([])

  useEffect(() => {
    let count = -1
    const toConvert = exercises.data
    const final_arr = toConvert.map(item => {
        count++
        return(
          {
            item: item,
            id: count,
          }
        )
      })
      props.post(final_arr)
  }, [ exercises.data ])
  
  function keyExtractor(item) {
    return item.item.exercise_id;
  }

  function renderItem(info: DragListRenderItemInfo<string>) {
    const {item, onDragStart, onDragEnd, isActive} = info;

    const name = item.item.exercise_obj.name
    const rep_end = item.item.workout_data.rep_end
    const rep_start =  item.item.workout_data.rep_start

    return (
      <Pressable 
        key={item.id}
        onPressIn={onDragStart}
        onPressOut={onDragEnd}>
        <Text>{name}</Text>
        <View>
          <Text>{rep_start}</Text>
          {rep_end !== rep_start && <Text>{rep_end}</Text> /*conditional if there is no rep range*/}
        </View>
      </Pressable> 
    );
  }

  async function onReordered(fromIndex: number, toIndex: number) {
    const copy = [...props.data]; // Don't modify react data in-place
    const removed = copy.splice(fromIndex, 1);

    copy.splice(toIndex, 0, removed[0]); // Now insert at the new post
    props.post(copy);
  }

  return (
    props.data.length ? <View>
      <DragList
        data={props.data}
        keyExtractor={keyExtractor}
        onReordered={onReordered}
        renderItem={renderItem}
        style={{flexGrow: 0}}
      />
    </View> :
    <Text>...Loading</Text>
  );
}