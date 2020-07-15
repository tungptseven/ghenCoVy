import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import CountryPicker from 'react-native-country-picker-modal'
import CountryCard from './CountryCard'

const CountryList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Entypo style={styles.searchIcon} name="magnifying-glass" size={20} color="#424242" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          // onChangeText={(searchString) => { this.setState({ searchString }) }}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.currentCountry}>
        <Text style={styles.currentTitle}>Current Location</Text>
        {/* <View style={styles.countryCard}>
          <View style={styles.countryInfo}>
            <Image source={require('../resources/italy-flag.png')} style={styles.countryFlag}></Image>
            <Text style={styles.countryName}>Italy</Text>
          </View>
          <Entypo name="check" size={20} color="#FA5252"></Entypo>
        </View> */}
        <CountryCard></CountryCard>
      </View>
      <ScrollView style={styles.listCountry}>
        <Text style={styles.character}>A</Text>
        {/* <View style={styles.countryCard}>
          <View style={styles.countryInfo}>
            <Image source={require('../resources/italy-flag.png')} style={styles.countryFlag}></Image>
            <Text style={styles.countryName}>Italy</Text>
          </View>
        </View>
        <View style={styles.countryCard}>
          <View style={styles.countryInfo}>
            <Image source={require('../resources/italy-flag.png')} style={styles.countryFlag}></Image>
            <Text style={styles.countryName}>Italy</Text>
          </View>
        </View>
        <View style={styles.countryCard}>
          <View style={styles.countryInfo}>
            <Image source={require('../resources/italy-flag.png')} style={styles.countryFlag}></Image>
            <Text style={styles.countryName}>Italy</Text>
          </View>
        </View>
        <View style={styles.countryCard}>
          <View style={styles.countryInfo}>
            <Image source={require('../resources/italy-flag.png')} style={styles.countryFlag}></Image>
            <Text style={styles.countryName}>Italy</Text>
          </View>
        </View> */}
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>


        <Text style={styles.character}>B</Text>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>


        <Text style={styles.character}>C</Text>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>


        <Text style={styles.character}>D</Text>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>

      </ScrollView>
    </View>
  )
}

export default CountryList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6F8',
  },
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 11,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginTop: 20
  },
  searchIcon: {
    // padding: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 0,
    color: '#424242',
    fontSize: 18,
    height: 70,
    backgroundColor: '#fff',
    marginHorizontal: 5
  },
  currentCountry: {
    // backgroundColor: 'green'
    paddingTop: 20
  },
  currentTitle: {
    marginLeft: 40,
    marginBottom: 20,
    marginTop: 10,
    color: '#ADB9CA',
    fontSize: 16
  },
  listCountry: {
    flex: 1,
    marginBottom: 40,
    // backgroundColor: 'blue'
  },
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
  character: {
    fontSize: 16,
    color: '#ADB9CA',
    padding: 20,
    marginLeft: 20
  },
})
