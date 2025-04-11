import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CarouselImages from './src/components/Carousel';
import ImageCarousel from './src/components/ImageCarousel';
import Index from './src/components/Slider';
import Resorts from './src/components/Resorts';
import NewResorts from './src/components/NewResorts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DisplayResort from './src/screens/DisplayResort';
import Club from './src/screens/Club';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='DisplayResort' component={DisplayResort}></Stack.Screen>
          <Stack.Screen name='Club' component={Club} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
