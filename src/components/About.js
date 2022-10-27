import React from "react";
import { View, Text, Image, Button } from "react-native";

import Style from "./Style";


export default function About({navigation}) {

    const navigationOptions = {
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
            return <Ionicons name={iconName} size={20} color={color} />;
        }
    }

    return (
        <View style={Style.container}>
            <Text style={Style.title} >A propos de l'application</Text>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 24,
                }}
            >
                Bienvenue sur mon Application Météo!
                Pour plus d'info sur les images: Weatherly 3D Illustration Pack
            </Text>
            <Image
                style={{ width: 300, height: 200 }}
                source={{
                    uri: "https://img.freepik.com/vecteurs-libre/icones-meteo-degrades-pour-applications_79603-1767.jpg?w=1380&t=st=1666566198~exp=1666566798~hmac=aee0d40a76c6aed02476b3738c186ac4cda5ec68a80a08e456e19bd8c9cde59c"
                }} />
            <Button onPress={() => navigation.navigate('Search')} title="Rechercher une ville" />
        </View>
    )
}

