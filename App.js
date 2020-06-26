import React from 'react';
import Routes from './src/routes';
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from './src/components/auth';


export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}