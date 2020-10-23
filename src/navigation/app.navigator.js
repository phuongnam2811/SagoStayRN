import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AuthNavigator }   from './auth.navigator';

export default function MainNavigator(){
    return(
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}