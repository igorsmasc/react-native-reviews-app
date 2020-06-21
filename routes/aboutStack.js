import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import About from "../screens/about";
import Header from '../shared/header';

const Stack = createStackNavigator()

export default function aboutNavigator({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='About'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#444',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <Stack.Screen 
          name='About' 
          component={About} 
          options={{
            headerTitle: () => <Header navigation={navigation} title="About GameZone" />,
          }}
      />
    </Stack.Navigator>
  );
}