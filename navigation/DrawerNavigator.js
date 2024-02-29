import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends component {

  componentDidMount(){
    let theme;

    firebase.database().ref("/users/"+firebase.auth().currentsUser.uid).on("value",function(snapshot){
        theme=snapshot.val().current_theme})
    this.setState({light_theme:theme==="light"?true :false})
  }
  
  render(){
    return (
      
      <Drawer.Navigator drawerContentOptions={{
        activeTintColor:"#e91e63", inactiveTintColor:this.state.light_theme?"black" :"white", itemStyle:{marginVertical:5}
      }} drawerContent={props=> <CustomSidebarMenu {...props}/>}>

        <Drawer.Screen name="Home" component={StackNavigator} options={{unmountOnBlur:true}}/>

        <Drawer.Screen name="Profile" component={Profile} options={{unmountOnBlur:true}} />

        <Drawer.Screen name="Logout" component={Logout} options={{unmountOnBlur:true}}/>

      </Drawer.Navigator>

    )
  }
};

