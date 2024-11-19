import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './components/Splash'; // Splash Screen
import LoginScreen from './components/Login'; // Login Screen
import SignUpScreen from './components/Signup'; // Sign Up Screen
import ForgotPasswordScreen from './components/Forget'; // Forgot Password Screen
import HomeScreen from './components/Home'; // Home Screen
import ProfileScreen from './components/Profile'; // Profile Screen
import CartScreen from './components/Cart'; // Cart Screen
import ServiceScreen from './components/Service'; // Service Screen
import PaymentsScreen from './components/Payment'; // Payments Screen
import AchievementsScreen from './components/Achive'; // Achievements Screen (NEW)
import PrivacyScreen from './components/Privacy'; // Privacy Screen (NEW)
import EditProfileScreen from './components/Edit'; // Import the new screen

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen
          name="Payments"
          component={PaymentsScreen}
          options={{
            headerShown: true,
            title: 'Payments',
          }}
        />
        <Stack.Screen
          name="Achievements" // NEW Achievement Screen
          component={AchievementsScreen}
          options={{
            headerShown: true,
            title: 'Achievements',
          }}
        />
        <Stack.Screen
          name="Privacy" // NEW Privacy Screen
          component={PrivacyScreen}
          options={{
            headerShown: true,
            title: 'Privacy Settings',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
