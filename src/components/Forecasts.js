import { StyleSheet, Pressable, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import Weather from './Weather';

export default function Forecasts({ data, setCurrent, current }) {

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
            {forecasts.slice(0, 8).map((f, id) => (
            <Pressable key={id} onPress={() => {setCurrent(id);}}>
                        <Weather 
                        forecasts={f}
                        key={id}
                        selectedId={id == current ? true : false}
                        />
                </Pressable>
                ))}

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