import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

const CountryList = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <View style={styles.searchSection}>
        <Entypo style={styles.searchIcon} name="menu" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          // onChangeText={(searchString) => { this.setState({ searchString }) }}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  )
}

export default CountryList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 11,
    marginHorizontal: 20,
    paddingHorizontal: 20
  },
  searchIcon: {
    // padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#424242',
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 11,
    marginHorizontal: 20,
    paddingHorizontal: 20
  },
})
