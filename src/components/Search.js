import React, { useState } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

import Style from './Style';

export default function Search(navigation) {

    const navigationOptions = {
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? 'ios-search-circle' : 'ios-search-circle-outline';
            return <Ionicons name={iconName} size={20} color={color} />;
        }
    }

    const [city, onChangeCity] = useState("Boulogne sur Mer");

    function submit() {
        this.props.navigation.navigate('Result', { city: this.state.city })
    }

    return (
        <View style={Style.container}>
            <Text style={Style.title}>
                Recherche :
            </Text>
            <TextInput
                style={Style.input}
                onChangeText={onChangeCity}
                value={city}
            />
            {/* <Button onPress={() => navigation.navigate('WeatherByDay', { city: this.state.city })} /> */}
        </View>
    )
}

