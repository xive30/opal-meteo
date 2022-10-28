import { StyleSheet, Pressable, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import Weather from './Weather';

export default function Forecasts({ data }) {

    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        const forecastsData = data.list.map(f => {
            const dt = new Date(f.dt * 1000)
            return ({
                date: dt,
                hour: dt.getHours(),
                temp: Math.round(f.main.temp),
                icon: f.weather[0].icon,
                name: format(dt, "EEEE", { locale: fr })
            })
        })
        setForecasts(forecastsData)
    }, [data])


    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
        >
            {/* <Pressable
                onPress={() => {
                    setsetCurrent(id);
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    styles.wrapperCustom,
                ]}
            > */}
                {forecasts.map((f, id) => (
                    <View key={id}>
                        <Weather forecasts={f} />
                    </View>
                ))}
            {/* </Pressable> */}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        width: "100%",
        height: "20%",
        marginTop: 10,
    }
})