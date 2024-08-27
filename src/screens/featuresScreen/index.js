import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";


import { styles } from "../../styles";

import { logo } from "../welcomeScreen";


import Features from "../../components/features";

const FeaturesScreen = () =>{
    return(
 
        <SafeAreaView style={styles.featuresContainer}>
            <View style={styles.featureImgContainer}>
                <Image source={logo} style={styles.featureImage}/>
            </View>

            <Features />
        </SafeAreaView>
           
      
    )
}

export default FeaturesScreen;