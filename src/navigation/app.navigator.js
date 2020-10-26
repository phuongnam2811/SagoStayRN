import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
import { HomeNavigator } from './home.navigator';


const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'transparent',
  },
};

const isSignedIn = true;


const Stack = createStackNavigator();
export default function MainNavigator(){
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        {isSignedIn === false ? (
          <Stack.Screen name='Auth' component={AuthNavigator} />
          
        ) : (
          <Stack.Screen name='Home' component={HomeNavigator}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}