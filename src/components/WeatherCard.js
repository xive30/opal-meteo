import { StyleSheet, Text, Image, View } from 'react-native'
import React, {  } from 'react'

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`



export default function WeatherCards({ forecasts, selectedId }) {

    return (
        <View style={selectedId ? styles.selectedContainer : styles.container}>
            
            <Text style={styles.temp} >{forecasts.temp}°</Text>
            <Image source={{ uri: getIcon(forecasts?.icon) }}
                style={styles.image}
            />
            <Text style={styles.hour} >{forecasts.hour}:00</Text>

        </View>

    )
}

const PRIMARYCOLOR = '#ffffff';
const SECONDARYCOLOR = '#FFFFFFAA';

const styles = StyleSheet.create({
    container: {
        height: 140,
        width: 90,
        paddingVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 30,
        borderColor: '#80808080',
        borderWidth: 2,
    },
    selectedContainer: {
        backgroundColor: "#11a9fe",
        height: 140,
        width: 90,
        paddingVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 30,
        borderColor: '#80808080',
        borderWidth: 2,
    },
    image: {
        color:'#fff',
        width: 50,
        height: 50
    },
    temp: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
    },
    hour: {
        fontSize: 16,
        fontWeight: "300",
        color: 'white'
    }

})