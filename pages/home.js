import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import mainStyles from '../styles/mainStyles';

export default function Home() {
  return (
    <View style={mainStyles.container}>
      <Text style={mainStyles.headerText}>Description: </Text>
      <Text style={mainStyles.bodyText}>Venenatis maecenas at ullamcorper risus iaculis at imperdiet nulla. Amet sed est porttitor ridiculus elementum. Non sem leo nunc quisque. Nec lobortis nisl blandit viverra amet tortor lorem elit mattis. Integer hendrerit egestas blandit at blandit ut. Arcu faucibus vitae in leo gravida auctor. Purus erat lacus enim viverra curabitur. Malesuada tempor neque in sed habitasse mi. Magna tristique consectetur commodo duis cursus enim massa. Mi varius posuere amet est. Tristique nisl ipsum massa eu dui sed feugiat et.</Text>
      <Pressable style={mainStyles.button}>
        <Text style={mainStyles.buttonText}>Add to workouts</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}