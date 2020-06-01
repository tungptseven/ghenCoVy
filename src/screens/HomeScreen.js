import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import ChartView from '../components/Home/ChartView'
import CaseView from '../components/Home/CaseView'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Entypo name='menu' size={30}></Entypo>
          <View style={styles.headerContent}>
            <Text style={styles.headerDate}>Mar 22, 2020, 12:48 GMT</Text>
            <Text style={styles.headerTitle}>Corona Virus Case</Text>
            <Text style={styles.headerNumber}>316,420</Text>
          </View>
        </View>
        <View style={styles.chartContainer}>
          <ChartView title='DEATHS' num='13,420' color='#E35757'></ChartView>
          <ChartView title='RECOVERED' num='9,786' color='#6AB276'></ChartView>
        </View>
        <View style={styles.caseContainer}>
          <CaseView></CaseView>
          <View style={{ height: 10 }}></View>
          <CaseView></CaseView>
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  container: {
    padding: 20,
    flex: 1
  },
  header: {
  },
  headerContent: {
    marginTop: 10
  },
  headerDate: {
    fontSize: 14,
    fontWeight: '400',
    color: '#35343A'
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#35343A',
    marginVertical: 8
  },
  headerNumber: {
    fontSize: 45,
    fontWeight: '500',
    color: '#35343A'
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  caseContainer: {
    paddingTop: 20,
  }
})