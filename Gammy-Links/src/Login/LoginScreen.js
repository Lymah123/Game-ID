import React, { useState } from 'react';
import { ImageBackground,View, Text, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import image from '../../assets/Login_page_BG.png';
import {LinearGradient} from 'expo-linear-gradient';
import CustomFont from '../fontFamily/CustomFont.js';
import DidGeneratorComponent from './components/DidGeneratorComponent.js';


//import { Web5 } from '@web5/api';
/*
React Native needs crypto.getRandomValues polyfill and sha512.
This is *not* the crypto you're thinking of.
It's the original crypto...CRYPTOGRAPHY.
*/
// import "react-native-get-random-values";
// import { hmac } from "@noble/hashes/hmac";
// import { sha256 } from "@noble/hashes/sha256";
// import { sha512 } from "@noble/hashes/sha512";


// ed.etc.sha512Sync = (...m) => sha512(ed.etc.concatBytes(...m));
// ed.etc.sha512Async = (...m) => Promise.resolve(ed.etc.sha512Sync(...m));

// secp.etc.hmacSha256Sync = (k, ...m) =>
//   hmac(sha256, k, secp.etc.concatBytes(...m));
// secp.etc.hmacSha256Async = (k, ...m) =>
//   Promise.resolve(secp.etc.hmacSha256Sync(k, ...m));


const LoginScreen = ()=>{
  const [displayType, setDisplayType] = useState('none');
  const[loginDisplay, setLoginDisplay] = useState('flex');
  const[userName, setUserName] = useState('');
  const[email, setEmail] = useState('');
  
  

  const toggleDisplay = () => {
    if (displayType === 'none' && loginDisplay === 'flex') {
      setDisplayType('flex');
      setLoginDisplay('none');
    } 
    else {
      setDisplayType('flex');
    }
  };

  

  //const creationOfMasterDID = async ()=>{
    
    

  //}
  
//   const createMessage = async()=>
//   {
//     const { web5, did } = await Web5.connect();
//     console.log("MasterDID:::   " + did);
//     toggleDisplay();
//     console.log("Enter createMsg");
//     //let base64Image = null;
    
//     // if (imageFile) {
//     //     const binaryImage = await imageFile.arrayBuffer();
//     //     base64Image = btoa(
//     //         new Uint8Array(binaryImage).reduce(
//     //             (data, byte) => data + String.fromCharCode(byte),
//     //             ""
//     //         )
//     //     );
//     // }

//     const messageData = {
//         nme: userName,
//         email: email
        
//     };

//     const { record } = await Web5.dwn.records.create({
//         data: messageData,
//         message: {
//             schema: "http://schema-registry.org/message",
//             dataFormat: "application/json"
//         },
//     });

//     console.log("record::: " + record)
    
// }

const joinButton=(username, email)=>{
  setUserName(username);
  setEmail(email);
  toggleDisplay();
  //createMessage();
}

    return(<View style={style.container}>
        <ImageBackground source={image} style={style.loginBackground}>
          <View style={style.logoContainer}>
           <Image source={require('../../assets/GammyLinks_logo_new.png')} style={style.logo}/>
           </View>
          <View style={style.profileContainer}>
            <View style={style.profileFrame}>
                <ImageBackground source={require('../../assets/clg1bpnd4000tif08vle4sjd1_1.jpeg')} resizeMode='cover' style={style.profileImage}/>
                <LinearGradient colors={['#ffffff00','#ffffff00','#000000']} style={style.addProfileImg}>
                  <CustomFont style={style.addAvatarText}>ADD AVATAR</CustomFont>
                </LinearGradient>
           </View>

          </View>
          
          <View style={[style.displayView, {display: displayType}]}>
          <DidGeneratorComponent>

          </DidGeneratorComponent>

          </View>
          

          <View style={[style.loginInputContainer, {display: loginDisplay}]}>
            <TextInput
            style={style.inputFields}
            value={userName}
            placeholder="@Username"
            placeholderTextColor="#ABABAB"
        
            />
            <TextInput
            style={style.inputFieldsEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="#ABABAB"
        
            />
            <TouchableOpacity style={style.buttons} onPress={joinButton}>
            <CustomFont style={style.buttonText}>J O I N</CustomFont>
            </TouchableOpacity>

            </View>
          
            <View style={style.charecters}>
            <ImageBackground source={require('../../assets/GroupCharecter.png')} style={style.groupCharecter}></ImageBackground> 

            </View>
          
            
          
        </ImageBackground>
    </View>);
}

const style = StyleSheet.create({
    loginBackground:{
        flex: 1,
    },
    container: {
        flex: 1,
      },
      profileContainer:{
        justifyContent:'center', 
        flexDirection: 'column', 
        alignItems:'center',
        width:'100%'
      },
      profileFrame:{
        borderWidth:0,
        borderColor:'#ffffff',
        width:127,
        height:127,
        justifyContent:'center', 
        borderRadius:100,
        overflow: 'hidden',
        shadowColor: '#74E3A4',
        shadowOffset: {
        width: 10,
        height: 10,
        },
       shadowOpacity: 1,
       shadowRadius: 20,
       elevation: 20,
      },
      profileImage:{
        width:'100%',
        height:'100%',
        borderRadius:100,
        flex:1,
        //flexWrap:'wrap',
        flexDirection:"row",
        
      },
      addProfileImg:{
        position:'absolute', 
        borderWidth:0, 
        width:127, 
        height:127,
        borderRadius:100,
        flex:1
      },
      addAvatarText:{
        zIndex:11,
        color:"#709C83",
        textAlign:"center",
        top:100, 
        left:0,
        fontSize:10
      },
      logoContainer:{
        
        justifyContent:'center', 
        flexDirection: 'column', 
        alignItems:'center'

      },
      logo:{
        
         width: 100,
         height:75,
         justifyContent:'center',
         marginHorizontal:20,
         marginVertical:50  
      },
      loginInputContainer:{
          marginHorizontal:5,
          marginVertical:30
      },
      inputFields:{
        backgroundColor:'#3C374D',
        opacity:0.9,
        marginHorizontal:60,
        marginVertical:10,
        borderRadius:10,
        height:40,
        padding:12,
        color:"#ffffff",
        zIndex:111,
        fontSize:12,
         
      },
      inputFieldsEmail:{
        backgroundColor:'#3C374D',
        opacity:0.9,
        marginHorizontal:60,
        marginVertical:3,
        borderRadius:12,
        height:40,
        padding:10,
        color:"#ffffff",
        zIndex:111,
        fontSize:12,
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
      charecters:{
        
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        height:'auto',
        

      },
      groupCharecter:{
        width:'auto',
        height:142,

      },
      displayView:{
        display: 'flex'
      }
    
});

export default LoginScreen;