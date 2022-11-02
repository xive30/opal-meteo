import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { format } from 'date-fns';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { fr } from 'date-fns/locale'

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`

export default function CurrentWeather({ data, current }) {

    return (
            <LinearGradient
                // Background Linear Gradient
                colors={['#15bef6', '#1E90FF']}
                style={styles.container}
            >

            <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-around", width: "100%" }}>

                <Ionicons style={styles.pressButton} name="grid" size={18} color="white" />
                <View style={{ flexDirection: "row" }}>
                    <Ionicons name="location-sharp" size={18} color="white" />
                    <Text style={styles.city}>{data?.city?.name}</Text>
                </View>
                <Ionicons name="ellipsis-vertical-sharp" size={18} color="white" />
            </View>

            <Image source={{ uri: getIcon(data.list[current].weather[0].icon) }}
                style={styles.image}
            />

            <Text style={styles.temp}> {Math.round(data.list[current].main.temp)}°</Text>
            <Text style={(styles.description)}> {data.list[current].weather[0].description}</Text>
            <Text style={styles.subContainerName}>  {format(data.list[current]?.dt, "EEEE dd MMMM", { locale: fr })} </Text>

            <View style={styles.subContainer}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Feather name="wind" size={24} color="white" />
                    <Text style={styles.subContainerData}>{data.list[current].wind.speed} km/h</Text>
                    <Text style={styles.subContainerName}>Vent</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Ionicons name="ios-water" size={24} color="#66b3ee" />
                    <Text style={styles.subContainerData}>{data.list[current].main.humidity} %</Text>
                    <Text style={styles.subContainerName}>Humidité</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <MaterialCommunityIcons name="weather-rainy" size={24} color="white" />
                    <Text style={styles.subContainerData}>{Math.round(data.list[current].pop * 100)} %</Text>
                    <Text style={styles.subContainerName}>Chance de pluie</Text>
                </View>
            </View>
        </LinearGradient>

    )
}

const PRIMARYCOLOR = '#ffffff';
const SECONDARYCOLOR = '#FFFFFFAA';

const styles = StyleSheet.create({
    container: {
        height: "75%",
        width: "100%",
        alignItems: 'center',
        borderRadius: 50,
        borderColor: "#2c93e5",
        borderWidth: 2,
    },
    subContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 30,
        bottom: 0,
    },
    pressButton: {
        borderColor: SECONDARYCOLOR,
        borderRadius: 50,
    },
    city: {
        fontSize: 18,
        fontWeight: "500",
        color: PRIMARYCOLOR
    },
    today: {
        fontSize: 12,
        fontWeight: "300",
        color: PRIMARYCOLOR
    },
    image: { width: 200, height: 200 },
    temp: {
        fontSize: 80,
        fontWeight: "bold",
        color: PRIMARYCOLOR
    },
    description: {
        fontSize: 28,
        fontWeight: "400",
        color: PRIMARYCOLOR
    },
    subContainerImage: {
        width: 50,
        height: 50,
    },
    subContainerData: {
        color: PRIMARYCOLOR,
        fontWeight: "700",
    },
    subContainerName: {
        color: SECONDARYCOLOR,
        fontWeight: "700",
    },

})