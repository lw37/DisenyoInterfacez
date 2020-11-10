/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Header, SearchBar } from 'react-native-elements'


class App extends Component {
  render() {

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Header
          leftComponent={{ icon: 'backspace' }}
          centerComponent={<SearchBar platform="android" placeholder="Type Here..." />}
          rightComponent={{ icon: 'email' }}
          containerStyle={{
            backgroundColor: '#70B603',
          }}
        />
      </>
    );
  }

}

const styles = StyleSheet.create({


});

export default App;
