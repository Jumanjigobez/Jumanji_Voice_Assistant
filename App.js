import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import WelcomeScreen from "./src/screens/welcomeScreen";
import FeaturesScreen from './src/screens/featuresScreen';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


import { primaryColor, white } from './src/styles';
import ChatScreen from './src/screens/chatScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'Assistant': require('./assets/fonts/Assistant-VariableFont_wght.ttf'),
  });
};

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  React.useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>; // Temporary loading text
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: white,
          headerStyle: { backgroundColor: primaryColor },
          headerTitleStyle: {
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ title: "Welcome", headerShown: false }} />
        <Stack.Screen name="features" component={FeaturesScreen} options={{ title: "Features" }} />
        <Stack.Screen name="chat" component={ChatScreen} options={{ title: "Chat" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;