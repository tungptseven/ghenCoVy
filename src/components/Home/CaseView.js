import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const CaseView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>ACTIVE CASE</Text>
        <Text style={styles.num}>205,459</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.itemRight}>
          <Icon name='arrowdown' color={'#E35757'}></Icon>
          <View style={styles.itemRightFill}>
            <Text style={styles.itemRightFillTitle}>95%</Text>
            <Text style={styles.itemRightFillDesc}>Mild Condition</Text>
          </View>
        </View>
        <View style={styles.itemRight}>
          <Icon name='arrowup' color={'#6AB276'}></Icon>
          <View style={styles.itemRightFill}>
            <Text style={styles.itemRightFillTitle}>5%</Text>
            <Text style={styles.itemRightFillDesc}>Critical</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CaseView

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: 'gray'
  },
  num: {
    fontSize: 42,
    fontWeight: '500'
  },
  left: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 20
  },
  right: {
    flex: 1
  },
  itemRightFill: {
    marginLeft: 6
  },
  itemRight: {
    flexDirection: 'row',
    marginTop: 10
  },
  itemRightFillTitle: {
    fontSize: 15,
    fontWeight: '600'
  },
  itemRightFillDesc: {
    color: '#CCCDCE',
    marginTop: 5
  }
})
