import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import About from "../screens/about";

const Stack = createStackNavigator()

export default function aboutNavigator() {
  return (
    <Stack.Navigator initialRouteName='About'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#999',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <Stack.Screen 
          name='About' 
          component={About} 
          options={{ 
            title: 'About',
          }}
      />
    </Stack.Navigator>
  );
}