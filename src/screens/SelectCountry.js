import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'

const SelectCountry = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainSection}>
        <Text style={styles.title}>Say a country name</Text>
        <Image source={require('../resources/sound.png')} style={styles.soundImage} />
      </View>
      <View style={styles.subSection}>
        <Image source={require('../resources/switch.png')} style={styles.switchImage} />
        <Button style={styles.subTitle} title='Switch to list view' color='#4B4A50' />
      </View>
    </View>
  )
}

export default SelectCountry

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  mainSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  },
  subSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 190
  },
  soundImage: {
    marginTop: 56
    // flex: 1
  },
  switchImage: {
    marginBottom: 15
  },
  title: {
    fontSize: 25,
    color: '#4B4A50'
  },
  subTitle: {
    fontSize: 18,
    marginTop: 30,
    color: '#4B4A50'
  }
})