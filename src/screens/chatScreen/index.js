import React from 'react';

import { View, Text, SafeAreaView, Image, ScrollView, Keyboard, TouchableWithoutFeedback  } from 'react-native';

import { chatgptLogo } from '../../components/features';
import { dalleLogo } from '../../components/features';
import { jumanjiLogo } from '../../components/features';

import { styles } from '../../styles';


import ChatMainContainer from '../../components/chatbox'

const ChatScreen = ({ route }) => {
    const { assistantType } = route.params;
  
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <SafeAreaView style={styles.chatContainer}>
                <View style={styles.chatImgContainer}>
                    <Image source={assistantType == "chatGPT" ? chatgptLogo : assistantType == "Dall-e" ? dalleLogo : jumanjiLogo} style={styles.chatImage}/>
                    <Text style={styles.chatTitle}>{assistantType}</Text>
                </View>

                <ChatMainContainer assistant = {assistantType}/>
                
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
  };

  export default ChatScreen;