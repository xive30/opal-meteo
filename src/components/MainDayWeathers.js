import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { format } from 'date-fns';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { fr } from 'date-fns/locale'

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`

export default function MainDayWeathers({ data }) {

    return (
            <LinearGradient
                // Background Linear Gradient
                colors={['#15bef6', '#1E90FF']}
                style={styles.container}
            >

            <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-around", width: "100%" }}>

                <Feather name="chevron-right" size={18} color="white" />
                <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons name="calendar-today" size={24} color="white" />
                    <Text style={styles.city}>5days</Text>
                </View>
                <Ionicons name="ellipsis-vertical-sharp" size={18} color="white" />
            </View>

            <View style={{flexDirection: "row", marginVertical:20}}>
                <Image source={{ uri: getIcon(data.list[0].weather[0].icon) }}
                    style={styles.image}
                />
                <View style={{ justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color:"white"}}>  {format(data.list[0]?.dt, "EEEE", { locale: fr })} </Text>

                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.tempMax}> {Math.round(data.list[0].main.temp_max)}</Text>
                        <Text style={styles.tempMin}>/{Math.round(data.list[0].main.temp_min)}°</Text>
                    </View>

                    <Text style={(styles.description)}> {data.list[0].weather[0].description}</Text>
                </View>
            </View>

            <View style={styles.subContainer}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Feather name="wind" size={24} color="white" />
                    <Text style={styles.subContainerData}>{data.list[0].wind.speed} km/h</Text>
                    <Text style={styles.subContainerName}>Vent</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Ionicons name="ios-water" size={24} color="#66b3ee" />
                    <Text style={styles.subContainerData}>{data.list[0].main.humidity} %</Text>
                    <Text style={styles.subContainerName}>Humidité</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <MaterialCommunityIcons name="weather-rainy" size={24} color="white" />
                    <Text style={styles.subContainerData}>{Math.round(data.list[0].pop * 100)} %</Text>
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
        height: "50%",
        width: "100%",
        justifyContent:"center",
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
    today: {
        fontSize: 12,
        fontWeight: "300",
        color: PRIMARYCOLOR
    },
    image: { width: 150, height: 150 },
    tempMax: {
        fontSize: 42,
        fontWeight: "bold",
        color: PRIMARYCOLOR
    },
    tempMin: {
        fontSize: 34,
        fontWeight: "bold",
        color: SECONDARYCOLOR,
        textAlignVertical: "bottom"
    },
    description: {
        fontSize: 14,
        fontWeight: "400",
        color: SECONDARYCOLOR
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