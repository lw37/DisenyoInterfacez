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


import { Header, SearchBar, Image, Button } from 'react-native-elements'
import { Evento } from './componentes/Evento'
import { Botonera} from './componentes/Botonera'
import{Navegador} from './componentes/Navegador'

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
            backgroundColor: '#00c856',
          }}
        />
        <View style={styles.container}>
        <View style={styles.container1}>
          <Botonera></Botonera>
          </View>
          <View style={{ flex: 15 }}>
            <ScrollView>
              <Evento></Evento>
              <Evento></Evento>
              <Evento></Evento>
              <Evento></Evento>
              <Evento></Evento>
            </ScrollView>
          </View>
          <Navegador></Navegador>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  buttonContainer: {
    flex: 1,
  },

});

export default App;
