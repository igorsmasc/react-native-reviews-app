import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';

const Stack = createStackNavigator()

export default function homeNavigator({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
      >
        <Stack.Screen 
            name='Home' 
            component={Home} 
            options={{
              headerTitle: () => <Header navigation={navigation} title="GameZone"/>,
            }}
            
        />
        <Stack.Screen 
            name='ReviewDetails' 
            component={ReviewDetails} 
            options={{ 
              title: 'Review Details'
            }}
        />
      </Stack.Navigator>
  );
}