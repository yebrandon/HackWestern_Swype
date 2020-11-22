import React from 'react'
import {ImageBackground, StyleSheet, Text, View} from 'react-native'

const image = { uri: "https://s3-media4.fl.yelpcdn.com/bphoto/Hh-lVMBwVqo7uHgO78HAqw/o.jpg" };

export const Option = props =>(
    <View style={styles.container}>
        <ImageBackground source = {props.image} style = {styles.image}>
            <View style = {styles.textBackground}>
                <Text style={styles.text}>{props.card.name}</Text>
                <Text style={styles.text}>{props.card.cuisine}</Text>
                <Text style={styles.text}>{props.card.price}</Text>
                <Text style={styles.text}>{props.card.address}</Text>
                <Text style={styles.text}>{props.card.rating}</Text>
                <Text style={styles.text}>{props.card.time}</Text>
            </View>
        </ImageBackground>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end",
      overflow:"hidden",
      borderRadius:20
    },
    text: {
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    textBackground:{
      backgroundColor: "#FFFFFF",
      borderRadius: 40,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20
    }
  })