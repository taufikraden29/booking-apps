import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Booking from './src/screens/Booking';
import Success from './src/screens/Success';
import Checkout from './src/screens/Checkout';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Details" component={Details}></Stack.Screen>
          <Stack.Screen name="Booking" component={Booking}></Stack.Screen>
          <Stack.Screen name="Success" component={Success}></Stack.Screen>
          <Stack.Screen name="Checkout" component={Checkout}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
  },
});

export default App;
