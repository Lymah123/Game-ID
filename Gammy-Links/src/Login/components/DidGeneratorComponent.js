import React, { useState } from 'react';
import { ImageBackground,View, Text, StyleSheet, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import {LinearGradient} from 'expo-linear-gradient';
import CustomFont from '../../fontFamily/CustomFont.js';

const DidGeneratorComponent =()=>{
    
    const Did = 'did:ion:EiAZyuHRTe0W24xBS0Yq1slBm1pnTGwYoBgsd-a5YlKaxw:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiLTRZTFlwdG9lXzV6Z0hsYkZSUHBVQjZfV3lhNnY4VmZvSGZJTzdyM2ZZZyJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJLU3g2MFNsd2J3dFNUNnRmZmJQcFVWNnNVcU5sblQyVFNFUmhWbEZHOHk0IiwieSI6IkF1UU9DeXJzcXJUZl9WUDdtc0hkNVlYVV9CRV9SbWRObmIyLTZxVXhWbHcifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZ';
    const TruncatedText = ({ text, maxLength }) => {
        if (text.length <= maxLength) {
          return <Text>{text}</Text>;
        }
      
        const truncatedString = text.substring(0, maxLength) + '...';
      
        return (
          <View>
            <CustomFont style={style.fontColorDiD}>{truncatedString}</CustomFont>
          </View>
        );
      };

      const copyToClipboard = () => {
        Clipboard.setString(Did);
        //Alert.alert('Copied to Clipboard', 'The text has been copied to the clipboard!');
      };
    


    return(
        <View style={style.DidContainer}>
            <View style={style.infoheader}>
            <CustomFont style={style.fontColorInfoHeader}>Please keep your Secret ID safe</CustomFont>
            </View>
            
            <View style={style.didViewer}>
            <TruncatedText text={Did} maxLength={190}/>
                
                <TouchableOpacity style={style.copyButton} onPress={copyToClipboard}>
                <CustomFont style={style.fontColorCopy}>Copy</CustomFont>
                </TouchableOpacity>
                
                
                
            </View>

            <TouchableOpacity style={style.buttons}>
            <CustomFont style={style.buttonText}>N E X T</CustomFont>
            </TouchableOpacity>
        </View>
    )
    
}

const style = StyleSheet.create({
    DidContainer:{
      marginVertical: 30
    },
    didViewer:{
        borderRadius:10,
        padding:15,
        paddingBottom:40,
        marginHorizontal: 60,
        display: 'flex',
        height: 120,
        color:'#ffffff',
        backgroundColor:'#3C374D'
    },
    fontColorDiD:{
        color: '#ffffff',
        fontSize: 11
    },
    copyButton:{
        marginVertical:13,
        width:'100%',
        display:'flex',
        alignItems:'center',
    },
    fontColorCopy:{
        display:'flex',
        alignContent:'center',
        color: '#74E3A4',
        fontSize:12
    },
    fontColorInfoHeader:{
        color: '#74E3A4'
    },
    infoheader:{
        display:'flex',
        alignItems:'center',
        marginBottom:10
    },
    buttons:{
        backgroundColor:'#74E3A4',
        marginHorizontal:60,
        marginVertical:20,
        padding:10,
        borderRadius:10,
        alignItems:'center',
        zIndex:11
        


      },
      buttonText:{
        fontSize:12,
        fontWeight:'bold'
      },

});

export default DidGeneratorComponent;