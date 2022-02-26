import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "./app/screens/HomeScreen";
import SearchScreen from "./app/screens/SearchScreen";
import OnboardingScreen from "./app/screens/OnboardingScreen";
import LoginScreen from "./app/screens/LoginScreen";

import StackNavigator from "./app/navigation/StackNavigator";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveBackgroundColor: 'black', tabBarInactiveBackgroundColor: 'black' }}

      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: () => { return null },
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={30} color="blue" />
          ),
        }} />

        <Tab.Screen name="Screen" component={SearchScreen} options={{
          tabBarLabel: () => { return null },
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={30} color="pink" />
          ),
        }} />

        <Tab.Screen name="Stack" component={StackNavigator} options={{
          tabBarLabel: () => { return null },
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={30} color="yellow" />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}