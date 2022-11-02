import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import axios from 'axios';
import CurrentWeather from './src/components/CurrentWeather';
import Forecasts from './src/components/Forecasts';
import { Feather } from '@expo/vector-icons';


const API_URL = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0574f7310aac987459fe294984066659&lang=fr&units=metric`


export default function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [current, setCurrent] = useState(0)


  useEffect(() => {
    const getCoordinates = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        return
      }

      const userLocation = await Location.getCurrentPositionAsync()
      getWeather(userLocation);
    }

    getCoordinates();
  }, [])


  const getWeather = async (location) => {
    try {
      const response = await axios.get(API_URL(location.coords.latitude, location.coords.longitude))

      setData(response.data)
      setLoading(false)

    } catch (e) {
      console.log("Erreur dans getWeather, " + e);
    }
  }

  if (loading) {
    return <View style={styles.container}>
      <ActivityIndicator size="large" color="#15bef6" />
    </View>
  }

  return (
    <View style={styles.container}>

      <CurrentWeather data={data} current={current} />


      <View style={styles.forecastTitleContainer}>
        <Text style={styles.forecastsTitle}>Aujourd'hui</Text>
        <TouchableOpacity
          style={styles.button}
        >
          <Text>5 days </Text>
          <Feather name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Forecasts data={data} setCurrent={setCurrent} current={current} />
      <StatusBar hidden={true}/>
    </View>
  );
}


const PRIMARYCOLOR = '#ffffff';
const SECONDARYCOLOR = '#FFFFFFCC';

const styles = StyleSheet.create({
  forecastTitleContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  forecastsTitle: {
    fontSize: 18,
    color: PRIMARYCOLOR,
    fontWeight:"700",
  },
  button: {
    flexDirection: "row",
    color: SECONDARYCOLOR,
    fontWeight:"700",
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 0,
  }
})