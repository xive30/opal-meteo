import React, { useEffect, useState} from "react";
import * as Location from 'expo-location';
import { StyleSheet, Text, View } from 'react-native'

import { ApiService } from "../../api/axios";


export default function weatherByDay(props) {

  
  navigationOptions = (props) => {
    title: `Météo / ${navigation.state.params.city}`
  }

  // expo location
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [meteo, setMeteo] = useState(null)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

//Call to the weather api
useEffect(() => {
  const api = ApiService;
  api.get(location.coords.latitude, location.coords.longitude)
    .then((response) => {
      setMeteo(response.data)
      
      return console.log(meteo);;
    })
    .catch(error => console.log(error));

}, [location])

console.log(location);

  return (
    <View>
      <Text> {meteo} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
