import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  { SignIn  } from '../scenes/auth/sign-in.component'
import  { SignUp } from '../scenes/auth/sign-up.component';
import  { ForgotPassword } from '../scenes/auth/forgot-password.component';

const Stack = createStackNavigator();
export function AuthNavigator(){
    return(
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp}/>   
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>   
    </Stack.Navigator>
    );
}