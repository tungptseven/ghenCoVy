import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const window = Dimensions.get("window")

const NewsScreen = () => {
  return (
    <View style={styles.flex}>
      <View style={styles.highLight}>
        <ImageBackground source={require('../resources/news1.png')} style={styles.image}>
          <LinearGradient colors={["transparent", "black"]} locations={[0.6, 1]} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              Sign in with Facebook
          </Text>
          </LinearGradient>
        </ImageBackground>
        {/* <View style={styles.title}>
          <Text>
            Hightlights
          </Text>
          <Text>
            German Chancellor Angela Merkel goes into self-quarantine
          </Text>
        </View> */}
      </View>
      <View style={styles.related}>

      </View>
      <Text></Text>
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  highLight: {
    height: window.height * 0.45,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  related: {},
  linearGradient: {
    flex: 1,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})