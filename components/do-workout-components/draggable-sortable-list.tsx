import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import DragList, { DragListRenderItemInfo } from 'react-native-draglist'
import getExercisesFromWorkoutRedux from '../../custom-hooks/getExercisesFromWorkoutRedux'

// const SOUND_OF_SILENCE = ['hello', 'darkness', 'my', 'old', 'friend'];

export default function DraggableLyrics() {
  // const [data, setData] = useState(SOUND_OF_SILENCE);
  const exercises = getExercisesFromWorkoutRedux('divisplitID', 2, 3)
  const [data, setData] = useState(['...Loading'])

  useEffect(() => {
    const DBdata = exercises.data
    console.log(DBdata)
    if(DBdata){
      console.log(DBdata.length)
      const temp_arr = []
      for(let i = 0; i < DBdata.length; i++){
        console.log(DBdata[i].exercise_id)
        temp_arr.push({...DBdata, exercise_id: i, name: DBdata[i].exercise_id})
        console.log(temp_arr)
      }
      if(temp_arr.length === exercises.data.length){
        setData(temp_arr)
      }
    }
  }, [ exercises.data ])

  function keyExtractor(str: string) {
    return str;
  }

  function renderItem(info: DragListRenderItemInfo<string>) {
    const {item, onDragStart, onDragEnd, isActive} = info;
    console.log(item.name)

    return (
      <Pressable
        key={item.exercise_id}
        onPressIn={onDragStart}
        onPressOut={onDragEnd}>
        <Text>{item.name}</Text>
      </Pressable>
    );
  }

  async function onReordered(fromIndex: number, toIndex: number) {
    const copy = [...data]; // Don't modify react data in-place
    const removed = copy.splice(fromIndex, 1);

    copy.splice(toIndex, 0, removed[0]); // Now insert at the new pos
    setData(copy);
  }

  return (
    <View>
      <DragList
        data={data}
        keyExtractor={keyExtractor}
        onReordered={onReordered}
        renderItem={renderItem}
      />
    </View>
  );
}