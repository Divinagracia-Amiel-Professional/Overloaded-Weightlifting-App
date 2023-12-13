import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import DragList, { DragListRenderItemInfo } from 'react-native-draglist'
import { useTheme } from 'react-native-paper'
import { 
  listStyles
} from '../../styles/style-index'
import getExercisesFromWorkoutRedux from '../../custom-hooks/getExercisesFromWorkoutRedux'
import DraglistExerciseItem from './draglistExerciseItem'

let DragListStyle = {}

export default function DraggableSortableList(props) {
  const theme = useTheme()

  const propsExercises = []

  const [ exercises, setExercises ] = useState([])

  function keyExtractor(item) {
    return item.item.exercise_id;
  }

  function renderItem(info: DragListRenderItemInfo<string>) {
    const {item, onDragStart, onDragEnd, isActive} = info;

    const name = item.item.exercise_obj.name
    const rep_end = item.item.workout_data.rep_end
    const rep_start =  item.item.workout_data.rep_start
    const sets = item.item.workout_data.set_count

    return (
      <DragListItem
        key={item.id}
        name={name}
        start={rep_start}
        end={rep_end}
        sets={sets}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        setScroll={props.setScroll}
        isActive={isActive}
      />
    );
  }

  async function onReordered(fromIndex: number, toIndex: number) {
    const copy = [...props.data]; // Don't modify react data in-place
    const removed = copy.splice(fromIndex, 1);

    copy.splice(toIndex, 0, removed[0]); // Now insert at the new post

    let count = -1
    const toConvert = copy
    const final_arr = toConvert.map(item => {
        count++
        return(
          {
            id: count,
            item: {...item.item,
              workout_data : {
                ...item.item.workout_data,
                order: count + 1
              }
            }
          }
        )
      })

    props.post(final_arr);
  }

  return (
    props.data.length ? 
    // <ScrollView
    //   // contentContainerStyle={{justifyContent: 'center',
    //   // alignSelf: 'stretch',}}
    // >
    <View
      style={{
        ...listStyles.draggable.listContainer,
        paddingBottom: 100,
      }}

      // contentContainerStyle={{
      //   justifyContent: 'center',
      //   alignSelf: 'stretch',
      // }}
    >
      <DragList
        data={props.data}
        keyExtractor={keyExtractor}
        onReordered={onReordered}
        renderItem={renderItem}
        scrollEnabled={false}
        // onScroll={() => {
        //   console.log('scrolled')
        // }}
        style={{
          flexGrow: 0,
          // paddingBottom: 200,
          // backgroundColor: 'red'
        }}
      />
    </View>
    // </ScrollView> 
    :
    <Text>...Loading</Text>
  );
}