import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarouselImages from '../components/Carousel';
import Resorts from '../components/Resorts';
import NewResorts from '../components/NewResorts';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <CarouselImages></CarouselImages>
      <Resorts navigation={navigation}></Resorts>
      <NewResorts></NewResorts>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})