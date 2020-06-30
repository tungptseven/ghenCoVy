import React, { useState, Component, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import ChartView from '../components/Home/ChartView'
import CaseView from '../components/Home/CaseView'
import axios from 'axios'
import NumberFormat from 'react-number-format'

const HomeScreen = () => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  let mockData = {
    "Global": {
      "NewConfirmed": 100282,
      "TotalConfirmed": 1162857,
      "NewDeaths": 5658,
      "TotalDeaths": 63263,
      "NewRecovered": 15405,
      "TotalRecovered": 230845
    },
    "Countries": []
  }

  const fetchData = () => {
    if (isLoading) {
      axios.get(`https://api.covid19api.com/summary`)
        // axios.get(`https://5ee067fa9ed06d001696dec3.mockapi.io/api/v1/summary`)
        .then(res => {
          setData(res.data.Global)
          console.log(data)
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // setData({
    //   "Global": {
    //     "NewConfirmed": 100282,
    //     "TotalConfirmed": 1162857,
    //     "NewDeaths": 5658,
    //     "TotalDeaths": 63263,
    //     "NewRecovered": 15405,
    //     "TotalRecovered": 230845
    //   },
    //   "Countries": []
    // }, () => {
    //   console.log(data);

    // })

  }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <ScrollView style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Entypo name='menu' size={30}></Entypo>
          <View style={styles.headerContent}>
            <Text style={styles.headerDate}>Mar 22, 2020, 12:48 GMT</Text>
            <Text style={styles.headerTitle}>Corona Virus Case</Text>
            {data && <NumberFormat
              // value={data.TotalConfirmed} displayType={'text'}
              value='3687094' displayType={'text'}
              thousandSeparator={true}
              renderText={value => <Text style={styles.headerNumber}>{value}</Text>}
            />}
          </View>
        </View>
        <View style={styles.chartContainer}>
          {/* {data && <ChartView title='DEATHS' num={data.TotalDeaths} color='#E35757'></ChartView>}
          {data && <ChartView title='RECOVERED' num={data.TotalRecovered} color='#6AB276'></ChartView>}         */}
          {data && <ChartView title='DEATHS' num='419389' color='#E35757'></ChartView>}
          {data && <ChartView title='RECOVERED' num='3375017' color='#6AB276'></ChartView>}
        </View>
        <View style={styles.caseContainer}>
          <CaseView type='active'></CaseView>
          <View style={{ height: 10 }}></View>
          <CaseView type='closed'></CaseView>
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
    fontSize: 50,
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