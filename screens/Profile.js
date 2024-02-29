import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text,
  Switch
} from "react-native";

import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class Profile extends Component {

  constructor(){
    super()
    this.state={isEnabled:false, light_theme:true, name:'empty'}
  }

  toggleSwitch(){
    const previous_state=this.state.isEnabled
    const theme = !this.state.isEnabled ? 'dark':'light'

    const auth = getAuth()
    const user = auth.currentUser

    if(user){
      var updates={}
      updates['users/' + user.uid + '/current_theme']=theme

      const dbRef = ref(db, '/')
      updates(dbRef, updates)

      this.setState({isEnabled:!previous_state,light_theme:previous_state})
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>

        <Text style={styles.appTitleText}>Story Telling</Text>

        <Image source={appIcon} style={styles.appIcon}/>

        <Text> {this.state.name} </Text>

        <Text> Dark Theme </Text>

        <Switch thumbColor={this.state.isEnabled?'black' :'white'}
          onValueChange={()=>this.toggleSwitch}
          value={this.state.isEnabled}/>
        </View>
    )
  }
}