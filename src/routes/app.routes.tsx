import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/Dashboard';
import { FormContact } from '../screens/FormContact';
import { FormGroup } from '../screens/FormGroup';
import { GroupSelect } from '../screens/GroupSelect';
import { Contact } from '../screens/Contact';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { GroupProvider } from '../hooks/group';
import { ContactProvider } from '../hooks/contact';

const Stack = createStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <GroupProvider>
      <ContactProvider>
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
            name="Dashboard"
            component={Dashboard}
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
      </ContactProvider>
    </GroupProvider>
  );
}