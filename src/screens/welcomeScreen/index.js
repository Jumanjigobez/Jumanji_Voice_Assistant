import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";

import { styles } from "../../styles";
import { useNavigation } from "@react-navigation/native";

export const logo = require("../../../assets/Icon.png")

const WelcomeScreen = () =>{
    const navigation = useNavigation();

    // const [isPressed, setIsPressed] = useState(false)
    const handleGetStarted = ()=>{
        // console.log(e.target.styles)
        // // e.target.styles = styles.BtnHovered;
        // isPressed ? setIsPressed(false) : setIsPressed(true);
        navigation.navigate('features')//Navigate to Features Screen
    }
    return(
        <SafeAreaView style={styles.welcomeContainer}>
            <View style={styles.boxTitle}>
                <Text style={styles.title}>Jumanji</Text>
                <Text style={styles.title2}>The future is here, Powered by AI</Text>
            </View>

            <View style={styles.boxImage}>
                <Image source={logo} style={styles.image}/>
            </View>

            
            <TouchableOpacity style={styles.btn} onPress={handleGetStarted} >
                <Text style={styles.textBtn}>Get Started</Text>
            </TouchableOpacity>
          
            
        </SafeAreaView>
    )
}

export default WelcomeScreen;