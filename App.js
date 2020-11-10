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
  Button,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Header, SearchBar } from 'react-native-elements'

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  render() {
    /*    const buttons = ['Hello', 'World', 'Buttons']
        const { selectedIndex } = this.state*/
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
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="FUTBOL" color="#95F204" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="BALONCESTO" color="#95F204" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="TENNIS" color="#95F204" />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="Eventos" color="#70B603" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Usuarios" color="#70B603" />
          </View>
        </View>
      </>
    );
  }

}

const styles = StyleSheet.create({
  /*
    butones:{
      width:100%,
    },
  */
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    color: "black",
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    color: "black",
  },
  buttonContainer: {
    flex: 1,
  },
  typeDeport: {
    backgroundColor: "#95F204",
    color: "black",
  }
});

export default App;
