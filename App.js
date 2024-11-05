// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ProfilePage from './ProfilePage';
import PasswordRecoveryPage from './PasswordRecoveryPage';

const Stack = createStackNavigator();

export default function App() {
  const [registeredUser, setRegisteredUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {(props) => <LoginPage {...props} registeredUser={registeredUser} />}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {(props) => <RegisterPage {...props} setRegisteredUser={setRegisteredUser} />}
        </Stack.Screen>
        <Stack.Screen name="PasswordRecovery">
          {(props) => <PasswordRecoveryPage {...props} registeredUser={registeredUser} setRegisteredUser={setRegisteredUser} />}
        </Stack.Screen>
        <Stack.Screen 
          name="Profile" 
          options={{ headerShown: false }}
        >
          {(props) => <ProfilePage {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
