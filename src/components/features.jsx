import React from 'react';

import { styles } from '../styles';

import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export const chatgptLogo = require("../../assets/images/chatgpt.png"),
    dalleLogo = require("../../assets/images/dalle.png"),
    jumanjiLogo = require("../../assets/images/jumanji.png");

const Features = () =>{
    const navigation = useNavigation();

    const goToChat = (assistantType) => {
        navigation.navigate('chat', { assistantType });
      };

    return(
        <ScrollView style={styles.scrollableContainer}>
            <View style={styles.featuresContent}>
            <TouchableOpacity style={styles.boxFeature} onPress={() => goToChat("chatGPT")}>
                <View style={styles.box}>
                    <Image source={chatgptLogo} style={styles.featureLogo}/>
                    <Text style={styles.featureTitle}>ChatGPT</Text>
                </View>
                <Text style={styles.featureText}>ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxFeature} onPress={() => goToChat("Dall-e")}>
                <View style={styles.box}>
                    <Image source={dalleLogo} style={styles.featureLogo}/>
                    <Text style={styles.featureTitle}>DALL-E</Text>
                </View>
                <Text style={styles.featureText}>DALL-E can generate imaginative and diverse images from textual or voice descriptions, expanding the boundaries of visual creativity.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxFeature} onPress={() => goToChat("Jumanji")}>
                <View style={styles.box}>
                    <Image source={jumanjiLogo} style={styles.featureLogo}/>
                    <Text style={styles.featureTitle}>Jumanji AI</Text>
                </View>
                <Text style={styles.featureText}>A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.</Text>
            </TouchableOpacity>

            {/* For more Features later */}
        </View>
        </ScrollView>
        
    )
}

export default Features;