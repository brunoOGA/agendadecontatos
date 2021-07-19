import React from 'react';

console.ignoredYellowBox = ['Setting a timer'];
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles/theme';
import { AuthProvider, useAuth } from './src/hooks/auth';
import firebase from 'firebase';
import { Routes } from './src/routes';

var firebaseConfig = {
  apiKey: "AIzaSyA9aEOZkV71Dyi4R5lSDxEJMaRW2j21QpY",
  authDomain: "agendadecontatos-786a3.firebaseapp.com",
  projectId: "agendadecontatos-786a3",
  storageBucket: "agendadecontatos-786a3.appspot.com",
  messagingSenderId: "680765221788",
  appId: "1:680765221788:web:1172104bdd023fd7aaf659",
  measurementId: "G-BPNT1CV7Y7"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}