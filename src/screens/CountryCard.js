import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

const CountryCard = () => {
  return (
    <View style={styles.countryCard}>
      <View style={styles.countryInfo}>
        <Image source={require('../resources/italy-flag.png')} style={styles.countryFlag}></Image>
        <Text style={styles.countryName}>Italy</Text>
      </View>
      <Entypo name="check" size={20} color="#FA5252"></Entypo>
    </View>
  )
}

export default CountryCard

const styles = StyleSheet.create({
  countryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    height: 60,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

  },
  countryInfo: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  countryFlag: {
    width: 33.23,
    height: 19.39
  },
  countryName: {
    fontSize: 20,
    marginLeft: 16
  },
})
