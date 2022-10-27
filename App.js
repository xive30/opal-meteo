import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



import About from './src/components/About';
import Search from './src/components/Search';
import { ApiService } from './src/api/axios';
import WeatherByDay from './src/components/weather/WeatherByDay';

const Tab = createMaterialTopTabNavigator();

export default function App() {

  return (
  // <WeatherByDay />
    <View style={{ flex: 1 }} >
      <NavigationContainer>

        <Tab.Navigator  
          screenOptions={() => ({
            tabBarActiveTintColor: '#40A0ff',
            tabBarInactiveTintColor: 'gray',
            tabBarPressColor: '#20507f',
            tabBarIndicatorStyle: {
              height:2,
              backgroundColor: '#FFF'
            }
          })}
        >
          <Tab.Screen name='Search' component={Search} />
          <Tab.Screen name='About' component={About} />
        </Tab.Navigator>

        <StatusBar hidden={true} style="auto" />
      </NavigationContainer>
      
    </View>
  );
}