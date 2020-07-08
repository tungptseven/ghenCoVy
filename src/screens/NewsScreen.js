import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, ScrollView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'

const window = Dimensions.get("window")

const NewsScreen = () => {
  return (
    <View style={styles.flex}>
      <Entypo name='menu' size={30} style={styles.menu}></Entypo>
      <View style={styles.highLightContainer}>
        <ImageBackground source={require('../resources/news1.png')} style={styles.image}>
          <LinearGradient colors={["transparent", "black"]} locations={[0.6, 1]} style={styles.linearGradient}>
            <View style={styles.hightLightButton}>
              <Text style={{ color: '#fff' }}>
                Hightlights
            </Text>
            </View>
            <Text style={styles.hightLightTitle}>
              German Chancellor Angela Merkel goes into self-quarantine
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.relatedContainer}>
        <Text style={styles.relatedHeader}>Related News</Text>
        <ScrollView>
          <View style={styles.relatedNew}>
            <Image source={require('../resources/news2.png')} style={styles.relatedImage} />
            <View style={styles.newInfo}>
              <Text style={styles.time}>12 hr 26 min ago</Text>
              <Text style={styles.relatedTitle}>DC to use National Guard to help prevent cherry blossom crowds in nation’s capital</Text>
            </View>
          </View>
          <View style={styles.relatedNew}>
            <Image source={require('../resources/news2.png')} style={styles.relatedImage} />
            <View style={styles.newInfo}>
              <Text style={styles.time}>12 hr 26 min ago</Text>
              <Text style={styles.relatedTitle}>DC to use National Guard to help prevent cherry blossom crowds in nation’s capital</Text>
            </View>
          </View>
          <View style={styles.relatedNew}>
            <Image source={require('../resources/news2.png')} style={styles.relatedImage} />
            <View style={styles.newInfo}>
              <Text style={styles.time}>12 hr 26 min ago</Text>
              <Text style={styles.relatedTitle}>DC to use National Guard to help prevent cherry blossom crowds in nation’s capital</Text>
            </View>
          </View>
          <View style={styles.relatedNew}>
            <Image source={require('../resources/news2.png')} style={styles.relatedImage} />
            <View style={styles.newInfo}>
              <Text style={styles.time}>12 hr 26 min ago</Text>
              <Text style={styles.relatedTitle}>DC to use National Guard to help prevent cherry blossom crowds in nation’s capital</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  menu: {
    color: '#fff',
    zIndex: 100,
    position: 'absolute',
    left: 20,
    top: 20
  },
  highLightContainer: {
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
  hightLightButton: {
    fontSize: 16,
    // fontFamily: 'Gill Sans',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#FA5252',
    width: 89,
    height: 28
  },
  hightLightTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    paddingHorizontal: 20,
  },
  relatedContainer: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 20,
    paddingTop: 27
    // '#F2F6F8'
  },
  relatedHeader: {
    fontSize: 17,
    marginBottom: 15
  },
  relatedNew: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginBottom: 18
  },
  newInfo: {
    flex: 1,
    marginLeft: 10,
    paddingTop: 1,
  },
  time: {
    fontSize: 15,
    color: '#AFB8BE',
  },
  relatedTitle: {
    fontSize: 16
  },
  linearGradient: {
    flex: 1,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 27,
    flexDirection: 'column',
    justifyContent: 'flex-end',
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