import React, { useState } from 'react';
import {View, TouchableOpacity, TextInput, ScrollView, Image, Text} from 'react-native';

import { styles } from '../styles';
import { FontAwesome } from '@expo/vector-icons';
import { apiCall } from '../api/openAI';

const RecorderIcon = require('../../assets/images/recorder.jpg'),
      RecordingGif = require('../../assets/images/recording.gif');

const ChatMainContainer = ({assistant}) =>{
    const [sending, setSending] = useState(false),
        [messages, setMessages] = useState([]),
        [inputText, setInputText] = useState(),
        [recording, setRecording] = useState(false);
      
    // alert(Keyboard.isVisible())//When start typing it becomes true

    const handleSendMsg = async () =>{
        if (!inputText.trim()) return;

        const userMessage = { role: 'user', content: inputText };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        const AIMessage = await apiCall(inputText);
        setMessages((prevMessages) => [...prevMessages, AIMessage]);

        setInputText("");

    }
    const handleStartRecording = () =>{
        setRecording(true);
    }

    const handleSendRecording = () =>{
        setRecording(false)
    }
    return(
           
        <ScrollView style={styles.chatMainContainer}>
            <View style={styles.chatContent}>
                <ScrollView style={styles.chatScrollableContainer}>
                    <View style={styles.msgContainer}>
                        {
                            messages.map((message, index) =>{
                                if(message.role === "assistant"){
                                    if(message.content.includes("https")){
                                        //img response
                                    }else{` `
                                        //text response
                                        return(
                                            <View  key={index} style={styles.assistantMsg}>
                                                <Text>{message.content}</Text>
                                            </View>
                                        )
                                        
                                    }
                                }else{
                                    //user input
                                    return(
                                        <View  key={index} style={styles.userMsg}>
                                            <Text>{message.content}</Text>
                                        </View>
                                    )
                                }
                            })
                        }
                    
                    </View>
                </ScrollView>
    
            </View>
                    
            <View style={styles.inputContainer}>
                {assistant === "chatGPT" ? (
                    <View style={styles.inputMsgBar}>
                
                        <View>
                            <TouchableOpacity style={styles.clrBtn}>
                                <FontAwesome name="times" size={20} color="#fafafa" />
                            </TouchableOpacity>
                        </View>
                
                    
                        <View style={styles.inputArea}>
                            <TextInput
                                style={styles.Input}
                                multiline={true}
                                numberOfLines={1}
                                placeholder="Write Something..."
                                
                                value={inputText}
                                onChangeText={setInputText}
                            />
                        </View>
                                
                        <View>
                            <TouchableOpacity style={styles.sendBtn} onPress={handleSendMsg}>
                            <FontAwesome name="arrow-right" size={22} color="#fafafa" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : assistant === "Dall-e" ? (
                    <View style={styles.inputMsgBar}>
                
                        <View>
                            <TouchableOpacity style={styles.clrBtn}>
                                <FontAwesome name="times" size={20} color="#fafafa" />
                            </TouchableOpacity>
                        </View>
                
                    
                        <View style={styles.inputArea}>
                            <TextInput
                                style={styles.Input}
                                multiline={true}
                                numberOfLines={1}
                                placeholder="Describe Picture..."
                                
                                value={inputText}
                                onChangeText={setInputText}
                            />
                        </View>
                                
                        <View>
                            <TouchableOpacity style={styles.sendBtn}>
                                <FontAwesome name="arrow-right" size={22} color="#fafafa" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <View style={styles.inputRecordBar}>
                        <View>
                            <TouchableOpacity style={styles.clrBtn}>
                                {/* <FontAwesome name="times" size={20} color="#fafafa" /> */}
                                <Text style={styles.btnText}>clear</Text>
                            </TouchableOpacity>
                            
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recorderBtn} onPress={handleStartRecording}>
                                <Image source={recording ? RecordingGif : RecorderIcon} style={styles.Recorder}/>
                            </TouchableOpacity>
                        </View>

                        {
                            recording && (
                                <View>
                                    <TouchableOpacity style={styles.sendBtn} onPress={handleSendRecording}>
                                        <FontAwesome name="arrow-right" size={22} color="#fafafa" />
                                        
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                        
                        
                    </View>
                )}
            </View>    

        </ScrollView>
        
 
    )
}

export default ChatMainContainer;

