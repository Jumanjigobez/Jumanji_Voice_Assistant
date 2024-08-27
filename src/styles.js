import React from "react";

import { StyleSheet } from "react-native";
import { Directions } from "react-native-gesture-handler";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";

//Styling Variables
export const primaryColor = '#30406e',
      secondaryColor = '#6684a8',
      white = "#fafafa",
      lightDark = "rgba(0,0,0,0.2)",
      red = "rgba(255,0,0,0.5)";

const wp = widthPercentageToDP,
      hp = heightPercentageToDP;

export const styles = StyleSheet.create({
 
    welcomeContainer:{
        backgroundColor: white,
        flex: 1,

        gap: 45,
        padding: 20,
        paddingTop: 60,
        alignItems: 'center'
    },
    boxTitle: {
        
        width: wp(100),
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        
        letterSpacing: 5
    },
    title2:{
        textAlign: "center",
        fontSize: 22,
        
        
    },
    boxImage: {
        
        width: wp(90),
        height: hp(60)
    },
    image: {
        alignSelf: "center",
        width: wp(100),
        height: wp(90)
    },

    btn: {
        backgroundColor: primaryColor,
        width: wp(90),
        padding: 20,
        borderRadius: 20,
    },
    btnPressed: {
        backgroundColor: "red",
        width: wp(100),
        padding: 20,
        borderRadius: 20,
    },
    textBtn: {
        color: white,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },

    //The Features Screen
    featuresContainer:{
       backgroundColor: white,
       flex: 1,
       
        gap: 20,
        padding: 10,
        paddingTop: 20,
        alignItems: 'center'
    },
    featureImgContainer:{
        
        width: wp(100),
        height: hp(25)
       
    },
    
    featureImage: {
      
        alignSelf: "center",
        width: wp(40),
        height: wp(40)
    },
    scrollableContainer:{
        
        borderRadius: 10
    },
    featuresContent:{
        
        width: wp(90),
        maxHeight: hp(100),
        display: "flex",
        gap: 20
    },

    boxFeature:{
        borderColor: primaryColor,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 10,
        padding: 10,
        gap: 10
    },
    box:{
        
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    featureLogo: {
        width: wp(10),
        height: hp(5)
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    featureText: {
        fontSize: 15,
        
    },

    //The Chat Screen
    chatContainer:{
        backgroundColor: white,
        flex: 1,
        
         gap: 10,
         padding: 10,
         paddingTop: 0,
         
         alignItems: 'center'
     },
     chatImgContainer:{
        
         width: wp(100),
         height: hp(15),
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "left",
         paddingLeft: 15,
         gap: 10

     },
     
     chatImage: {
       
         
         width: wp(20),
         height: wp(20)
     },
     chatTitle:{
        fontSize: 20,
        fontWeight: "bold"
     },
     chatMainContainer:{
        

     },
     chatContent:{
        backgroundColor: lightDark,
        width: wp(95),
        height: hp(60),
        borderRadius: 10,
        display: "flex"
     },
     
     chatScrollableContainer: {
        backgroundColor: "tranparent",
        padding: 10,
        borderRadius: 10,
        
     },
     msgContainer:{
       
        display: "flex",
        
        gap: 15,
     },
     userMsg:{
        backgroundColor: white,
        width: wp(70),
        padding: 10,
        borderRadius: 15,
        borderTopRightRadius: 0,
        alignSelf: "flex-end"
     },
     assistantMsg:{
        backgroundColor: secondaryColor,
        width: wp(70),
        padding: 10,
        borderRadius: 15,
        borderTopLeftRadius: 0,
        alignSelf: "flex-start"
     },

     inputContainer: {
        paddingHorizontal: 5,
        marginTop: 10,
        marginLeft: 5,
        width: wp(90),
        height: wp(20),
        
     },


     inputMsgBar: {
       
        padding: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: wp(90),
        gap: 5
     },
     inputRecordBar: {
        // backgroundColor: "blue",
        padding: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: wp(90),
        gap: 10,
        
     },

     clrBtn: {
        backgroundColor: red,
        padding: 10,
        borderRadius: 10,
        
     },
     inputArea:{
        
     },
     Input:{
        height: wp(15),
        width: wp(68),
        borderRadius: 10, 
        paddingHorizontal: 10, 
        // textAlignVertical: 'top',
        backgroundColor: lightDark, 
        fontSize: 16, 
        color: 'black', 
        
     },
     sendBtn:{
      
        backgroundColor: primaryColor,
        padding: 15,
        // paddingTop: 15,
        // height: wp(15),
        borderRadius: 10
     },
     btnText: {
        color: "#fafafa",
        fontWeight: "bold",
        fontSize: 16
     },
     recorderBtn:{
        
       
     },
     Recorder:{
        width: hp(10),
        height: hp(10),
        
     },


    
})