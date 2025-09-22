import React from 'react';
import { Text, View } from 'react-native';
import {Tabs} from 'expo-router';
import { theme } from '@/constants/theme';
import {Ionicons} from '@expo/vector-icons';


function TabsContent() {
  
  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textLight,
        tabBarStyle: {
          backgroundColor: theme.neutralGray,
          borderTopWidth: 1,
          borderTopColor: theme.grayDark,
          position : 'absolute',
          elevation: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 5,
        },
    }}>
      <Tabs.Screen 
        name="home" 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
        }} 
      />
      <Tabs.Screen 
        name="data" 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="wifi" size={size} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="airtime" 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="call" size={size} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="tv" 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="tv" size={size} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="history" 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="time" size={size} color={color} />
        }} 
      />
    </Tabs>
  );
}

export default function TabLayout() {
  return (
    <TabsContent />
  );
}