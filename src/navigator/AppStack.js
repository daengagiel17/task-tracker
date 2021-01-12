import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AppStack(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{headerShown: false}}
          name="Test"
          component={TestScreen}
        /> */}
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
