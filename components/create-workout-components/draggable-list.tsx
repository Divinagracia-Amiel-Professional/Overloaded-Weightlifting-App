import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import DragList, { DragListRenderItemInfo } from 'react-native-draglist'
import { useTheme } from 'react-native-paper'
import { 
  listStyles,
  buttonStyles
} from '../../styles/style-index'
import getExercisesFromWorkoutRedux from '../../custom-hooks/getExercisesFromWorkoutRedux'
import DraglistExerciseItem from './draglistExerciseItem'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import formatData from '../../functions/formatData'
import reorderWorkout from '../../functions/reorderWorkout'

let DragListStyle = {}

export default function ReorderList(props) { //Component for reordering cycles, splits, and exercises in Create From Scratch Page
  const theme = useTheme()

  const data = formatData(props.data, props.type)

  function keyExtractor(item) {
    return item.order;
  }

  function renderItem(info: DragListRenderItemInfo<string>) {
    const {item, onDragStart, onDragEnd, isActive} = info;8

    return (
      <DraglistExerciseItem
        key={item.order}
        order={item.order}
        name={item.name}
        data={item.data}
        type={item.type}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        setScroll={props.setScroll}
        isActive={isActive}
      />
    );
  }

  async function onReordered(fromIndex: number, toIndex: number) {
    const copy = [...data]; // Don't modify react data in-place
    const removed = copy.splice(fromIndex, 1);

    copy.splice(toIndex, 0, removed[0]); // Now insert at the new post

    const reformatted = reformatData(copy)

    const cycles = props.type === 'cycle' ? [] : [...props.workout.cycles]

    switch(props.type){
      case 'cycle':
        props.post([
          ...reformatted
        ]);
        break;
      case 'split':
        cycles[props.cycleOrder - 1].split = reformatted

        updateWorkout(cycles)
        break;
      case 'exercise':
        cycles[props.cycleOrder - 1].split[props.splitOrder - 1].exercises = reformatted
  
        updateWorkout(cycles)
        break;
    }
  }

  const updateWorkout = (cycles) => {
    const updatedCycle = cycles

    const resetOrder = reorderWorkout(updatedCycle)

    props.post({
      cycles: [
          ...resetOrder
      ]
    })
  }

  return (
    props.data.length ? 
    // <ScrollView
    //   // contentContainerStyle={{justifyContent: 'center',
    //   // alignSelf: 'stretch',}}
    // >
    <GestureDetector gesture={props.onGesture ? props.onGesture : Gesture.Tap()}>
      <View
        collapsable={false}
        style={{
          alignSelf: 'stretch',
          margin: props.type === 'exercise' ? 0 : 15,
        }}

        // contentContainerStyle={{
        //   justifyContent: 'center',
        //   alignSelf: 'stretch',
        // }}
      >
        <DragList
          data={data}
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
    </GestureDetector>
    // </ScrollView> 
    :
    <View
      style={{...buttonStyles.fromScratch.addSectionButton.container,
        height: 75
      }}
    >
      <Text>No Exercises to Reorder</Text>
    </View>
  );
}

const reformatData = (data) => {
  const reformatted = data.map(item => ({
    ...item.data
  }))

  return reformatted
}

// const reorderData = (data, type) => {
//   let count = 0

//   // const reordered = data.map(item => {
//   //   count++ =
//   // })
  
//   // switch (type) {
//   //   case 'exercise':
//   //     reordered = data.map(exercise => {
//   //       count++
//   //       return({

//   //       })
//   //     })
//   //     break;
//   //   default:

//   //     break;
//   // }

//   return reordered
// }