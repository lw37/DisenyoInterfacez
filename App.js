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

import { Header, SearchBar, Image, Button } from 'react-native-elements'

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
          <View style={styles.container1}>
            <View style={styles.buttonContainer}>
              <Button title="FUTBOL" buttonStyle={{backgroundColor:"#70B603"}} titleStyle={{color:"black"}} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="BALONCESTO" buttonStyle={{backgroundColor:"#70B603"}} titleStyle={{color:"black"}} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="TENNIS" buttonStyle={{backgroundColor:"#70B603"}} titleStyle={{color:"black"}} />
            </View>
          </View>
          <View style={{ flex: 20 }}>
            <Image
              source={{ uri: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/12/18/15766742679480.jpg" }}
              style={{ width: "auto", height: 200 }}
            />
            <Image
              source={{ uri: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/12/18/15766742679480.jpg" }}
              style={{ width: "auto", height: 200 }}
            />
            <Image
              source={{ uri: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/12/18/15766742679480.jpg" }}
              style={{ width: "auto", height: 200 }}
            />
            <Image
              source={{ uri: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/12/18/15766742679480.jpg" }}
              style={{ width: "auto", height: 200 }}
            />
            <Image
              source={{ uri: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/12/18/15766742679480.jpg" }}
              style={{ width: "auto", height: 200 }}
            />
          </View>
          <View style={styles.container1}>
            <View style={styles.buttonContainer}>
              <Button title="Eventos" buttonStyle={{backgroundColor:"#70B603"}} titleStyle={{color:"black"}} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Usuarios" buttonStyle={{backgroundColor:"#70B603"}} titleStyle={{color:"black"}}/>
            </View>
          </View>
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
  },
  buttonContainer: {
    flex: 1,
  },

});

export default App;
