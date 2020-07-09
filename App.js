/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import BottomBar from './src/components/Home/BottomBar';
import NewsScreen from './src/screens/NewsScreen';
import SelectCountry from './src/screens/SelectCountry';
import CountryList from './src/screens/CountryList';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flex}>
        {/* <HomeScreen></HomeScreen> */}
        {/* <NewsScreen></NewsScreen> */}
        {/* <SelectCountry></SelectCountry> */}
        <CountryList></CountryList>
        <BottomBar></BottomBar>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});

export default App;
