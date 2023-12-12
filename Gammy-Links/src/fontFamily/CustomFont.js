import React from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

// Load the Roboto font
const loadRobotoFont = async () => {
  await Font.loadAsync({
    Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Italic': require('../../assets/fonts/Roboto-Italic.ttf'),
    // Add other variations of the font as needed (e.g., Bold, Italic)
  });
};

loadRobotoFont(); // Load the font when the app starts

const CustomFont = (props) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'Roboto' }]}>
      {props.children}
    </Text>
  );
};

export default CustomFont;
