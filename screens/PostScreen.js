import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

export default class PostCard extends Component {
  constructor(){
    super()
    this.state={lightTheme:false, post_id:this.props.post.key, post_data:this.props.post.value}
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.autherContainer}>
            <View style={styles.authorContainer}>
              <Image source={require("../assets/profile_imgpng")} style={styles.profileImage}></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={this.state.lightTheme?styles.authorNameTextLight :styles.authorNameText}>{this.props.post.author}</Text>
            </View>
            <Image source={require("..assets/post.jpeg")} style={styles.postImage}></Image>
            <View style={styles.captionContainer}>
              <Text style={this.state.lightTheme?styles.captionTextLight :styles.captionText}>{this.props.post.caption}</Text>
            </View> 
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"}></Ionicons>
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>           
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2a2a2a",
      borderRadius: RFValue(20),
      padding: RFValue(20)
  },
  authorContainer: {
      flex: 0.1,
      flexDirection: "row"
  },
  authorImageContainer: {
      flex: 0.15,
      justifyContent: "center",
      alignItems: "center"
  },
  profileImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
      borderRadius: RFValue(100)
  },
  authorNameContainer: {
      flex: 0.85,
      justifyContent: "center"
  },
  authorNameText: {
    color: "white",
    fontSize: RFValue(20)
},
authorNameTextLight: {
  color: "black",
  fontSize: RFValue(20)
},
  postImage: {
      marginTop: RFValue(20),
      resizeMode: "contain",
      width: "100%",
      alignSelf: "center",
      height: RFValue(275)
  },
  captionContainer: {},
  captionText: {
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
},
captionTextLight: {
  fontSize: 13,
  color: "black",
  paddingTop: RFValue(10)
},
  actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
  },
  likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
  },
  likeText: {
      color: "white",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
  }
});