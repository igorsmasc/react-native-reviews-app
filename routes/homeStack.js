import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();

export default function Navigator() {

    return(
        <NavigationContainer initialRouteName="Home">
            <Stack.Navigator  screenOptions={{
                    headerStyle: {
                      backgroundColor: "#eee",
                      height: 60,
                    },
                    headerTintColor: "#444",
                 }}>
                <Stack.Screen name="Home" component={Home} 
                    options={{
                        title:"GameZone",
                        }} />
                <Stack.Screen name="ReviewDetails" component={ReviewDetails} 
                    options={{
                        title:"Review Details",
                        }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

