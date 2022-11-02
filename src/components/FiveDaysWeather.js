import { StyleSheet, View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export default function FiveDaysWeather({ data }) {

    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        const forecastsData = data.list.map(f => {
            const dt = new Date(f.dt * 1000)
            return ({
                date: dt,
                hour: dt.getHours(),
                desc: f.weather.desc,
                tempMin: Math.round(f.main.temp_min),
                tempMax: Math.round(f.main.temp_max),
                icon: f.weather[0].icon,
                name: format(dt, "EEE", { locale: fr })
            })
        })
        setForecasts(forecastsData)
    }, [data])


    return (
        <View
            style={styles.container}
        >
            {forecasts.map((f, id) => (
                <View key={id} style={{flexDirection: "row", justifyContent: "space-around",}}>
                    <Text style={styles.text}>{f.name}</Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `http://openweathermap.org/img/wn/${f.icon}@4x.png`,
                        }}
                    />
                    <Text style={styles.textTitle}>{f.desc}</Text>
                    <View style={styles.group}>
                        <Text style={styles.tempMax}>{f.tempMax} / </Text>
                        <Text style={styles.tempMin}>{f.tempMin}°</Text>
                    </View>
                </View>
            ))}

        </View>
    )
}

const PRIMARYCOLOR = '#ffffff';
const SECONDARYCOLOR = '#FFFFFFAA';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "50%",
    },
    text: {
        color: SECONDARYCOLOR,
    },
    image: {
        color:'#fff',
        width: 50,
        height: 50
    },
    textTitle: {
        color: SECONDARYCOLOR,
    },
    group: {
        flexDirection: "row",
    },
    tempMax: {
        color: PRIMARYCOLOR,
    },
    tempMin: {
        color: SECONDARYCOLOR,
    },

})
