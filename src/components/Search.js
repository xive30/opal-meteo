import React, { useState } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

import Style from './Style';

export default function Search(navigation) {

    const [city, onChangeCity] = useState("Boulogne sur Mer");

    function submit() {
        (city) => navigation.navigate('Search')
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
            <Button onPress={() => submit()} title="Rechercher" />
        </View>
    )
}

