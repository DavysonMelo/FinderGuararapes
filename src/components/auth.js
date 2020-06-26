import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import api from '../services/api';

const AuthContext = createContext({ signed: true });

export function AuthProvider({children}) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuthorization() {
      const response = await AsyncStorage.getItem('user');

      if(response) {
        const parsedItem = JSON.parse(response);
        setUser(parsedItem);
        setLoading(false);
      }else {
        setLoading(false);
      }
    }
      checkAuthorization();
  }, []);

  async function signIn(email, password) {
    try{
      const response = await api.post("/login", { email, password });

      setUser(response.data);

      const item = JSON.stringify(response.data);
      
      await AsyncStorage.setItem("user", item);

      if(response.data.error) {
        setUser(null);
        return false;
      } else {
        return true;
      } 

    } catch(error) {
      console.log(error);
      return false;
    }
  }

  async function signOut() {
    await AsyncStorage.clear();

    setUser(null);
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;