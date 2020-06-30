import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NumberFormat from 'react-number-format'

const ChartLine = ({ height, style, color }) => {
  return (
    <View style={[styles.line, { height }, style]}>
      <View style={[styles.fill, { height: '25%', backgroundColor: color }]}></View>
    </View>
  )
}

const ChartView = ({ title, num, color }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text style={[styles.number, { color: color }]}>{num}</Text> */}
        <NumberFormat
          value={num} displayType={'text'}
          thousandSeparator={true}
          renderText={value => <Text style={[styles.number, { color: color }]}>{value}</Text>}
        />
      </View>
      <View style={styles.chart}>
        <View style={styles.chartContainer}>
          {
            Array(15)
              .fill(0)
              .map((e, i) => {
                return (
                  <ChartLine
                    key={i.toString()}
                    height={30 + parseInt(70 * Math.random())}
                    style={[i == 14 && { marginRight: 0 }]}
                    color={color}
                  />)
              })
          }
          {/* <ChartLine /> */}
        </View>
      </View>
    </View>
  )
}

export default ChartView

const styles = StyleSheet.create({
  container: {
    height: 220,
    backgroundColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500'
  },
  number: {
    fontSize: 30,
    fontWeight: '500',
    color: '#E25858'
  },
  chart: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center'
  },
  line: {
    width: 3,
    height: 100,
    backgroundColor: '#EAEAEB',
    justifyContent: 'flex-end',
    marginRight: 8
  },
  fill: {
    height: 20,
    backgroundColor: '#B56A63'
  },
  header: {
    padding: 20
  },

})
