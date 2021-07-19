import React, { useContext, ReactNode, createContext } from 'react';
import firebase from 'firebase';
import { Alert } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
}

interface IAuthContextData {
  user: User;
  createUserWithEmailAndPassword(email: string, password: string): void;
  signInWithEmailAndPassword(email: string, password: string): void;
  signOut(): void;
  userStorageLoading: boolean;
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as User);
  const [userStorageLoading, setUserStorageLoading] = useState(true);

  useEffect(() => {
    async function loadUserStorageDate() {
      const userStoraged = await AsyncStorage.getItem('@agendadecontatos:user');

      if(userStoraged) {
        const userLogged = JSON.parse(userStoraged) as User;

        setUser(userLogged)
      }

      setUserStorageLoading(false);
    }

    loadUserStorageDate();
  }, [])

  async function createUserWithEmailAndPassword(email: string, password: string): Promise<void> {
    await firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async response => {
        const userLogged = {
          id: String(response.user?.uid)
        }

        setUser(userLogged);

        await AsyncStorage.setItem('@agendadecontatos:user', JSON.stringify(userLogged));
      })
      .catch(error => {
        Alert.alert("Houve um problema", "Tente novamente.")
      });
  }

  async function signInWithEmailAndPassword(email: string, password: string): Promise<void> {
    await firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(async response => {
        const userLogged = {
          id: String(response.user?.uid)
        }

        setUser(userLogged);

        await AsyncStorage.setItem('@agendadecontatos:user', JSON.stringify(userLogged));
      })
      .catch(error => {
        Alert.alert("Houve um problema", "E-mail e/ou senha inválido(s).");
      });
  }
  
  async function signOut() {
    setUser({} as User);

    await AsyncStorage.removeItem('@agendadecontatos:user');
  }


  return (
    <AuthContext.Provider value={{
      user,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      userStorageLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };