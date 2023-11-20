import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import DragList, { DragListRenderItemInfo } from 'react-native-draglist'
import { useTheme } from 'react-native-paper'
import { 
  listStyles
} from '../../styles/style-index'
import getExercisesFromWorkoutRedux from '../../custom-hooks/getExercisesFromWorkoutRedux'
import DragListItem from './draggable-sortable-list-item'

let DragListStyle = {}

export default function DraggableSortableList(props) {
  const theme = useTheme()

  //styling

  const exercises = getExercisesFromWorkoutRedux(
    props.currentWorkout.id,
    props.currentWorkout.cycle,
    props.currentWorkout.split.order
  )
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
      />
    );
  }

  async function onReordered(fromIndex: number, toIndex: number) {
    const copy = [...props.data]; // Don't modify react data in-place
    const removed = copy.splice(fromIndex, 1);

    copy.splice(toIndex, 0, removed[0]); // Now insert at the new post
    props.post(copy);
    
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
        }}
      />
    </View>
    // </ScrollView> 
    :
    <Text>...Loading</Text>
  );
}