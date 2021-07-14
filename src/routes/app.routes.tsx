import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Contacts } from '../screens/Contacts';
import { FormContact } from '../screens/FormContact';
import { FormGroup } from '../screens/FormGroup';
import { GroupSelect } from '../screens/GroupSelect';
import { Contact } from '../screens/Contact';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

const Stack = createStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.shape,
        headerTitleStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: RFValue(24)
        },
      }}
    >
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="FormContact"
        component={FormContact}
        options={{
          title: 'Novo Contato'
        }}
      />
      <Stack.Screen
        name="GroupSelect"
        component={GroupSelect}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="FormGroup" 
        component={FormGroup} 
        options={{
          title: 'Novo Grupo'
        }}
      />
      <Stack.Screen 
        name="Contact" 
        component={Contact} 
        options={{
          title: 'Contato'
        }}
      />
    </Stack.Navigator>
  );
}