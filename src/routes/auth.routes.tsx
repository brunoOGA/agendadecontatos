import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const Stack = createStackNavigator();

export function AuthRoutes() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
}