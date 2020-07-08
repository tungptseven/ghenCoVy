import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const BottomBar = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={[styles.col1]}>
          <Feather name='cast' size={30} color='#B6BBC4'></Feather>
        </View>
        <View style={styles.col1}>
          <Feather name='bell' size={30} color='#B6BBC4'></Feather>
        </View>
      </View>
      <View style={styles.volumnCon}>
        <Feather name='mic' size={30} color='#222' />
      </View>
    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 25,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    // '#F4F4F4'
  },
  col1: {
    width: '50%',
    // borderTopRightRadius: 200,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center'
  },
  center: {
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: '#fff',
    width: 100,
    height: 400,
    top: 10,
    borderRadius: 40
  },
  center2: {
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: 'green',
    opacity: 0.1,
    // '#F4F4F4',
    width: 90,
    height: 90,
    top: -56,
    borderRadius: 100
  },
  volumnCon: {
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: '#fff',
    width: 90,
    height: 90,
    top: -50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  }
})
