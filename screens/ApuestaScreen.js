import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

} from 'react-native';

import { Header, SearchBar, Image, Button, Input } from 'react-native-elements'

import { Apuesta } from '../componentes/Apuesta'
class ApuestaScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#00c856' }}>
        <StatusBar barStyle="dark-content" />
        <Header
          centerComponent={{ text: 'Apuesta', style: { color: 'black', fontSize: 30, } }}
          leftComponent={{ icon: 'backspace' }}
          backgroundColor='#00c856'
        />
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Image
                  source={{ uri: "https://assets.stickpng.com/images/584ad186b519ea740933a89e.png" }}
                  style={{ width: 55, height: 70 }}
                />
                <Text style={{ fontSize: 20 }}>Valencia</Text>

              </View>
              <View style={{ flex: 2, alignItems: 'center' }}>
                <Text style={{ fontSize: 50 }}>VS</Text>
                <Text style={{ fontSize: 20 }}>   20/10/2020</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Image
                  source={{ uri: "https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png" }}
                  style={{ width: 70, height: 70 }}
                />
                <Text style={{ fontSize: 20 }}>Bacelona</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 5 }}>
            <Apuesta></Apuesta>
            <Apuesta></Apuesta>
            <Apuesta></Apuesta>
            {/*             <View style={styles.apuestaContainer}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>1.5GOLES</Text>
              </View>
              <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={styles.cuotaBox}>
                  <Text>Cuota Over 1.43</Text>
                  <Input></Input>
                </View>
                <View style={styles.cuotaBox}>
                  <Text>Cuota Under 2.8</Text>
                  <Input></Input>
                </View>
              </View>
            </View>
            <View style={styles.apuestaContainer}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>2.5GOLES</Text>
              </View>
              <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={styles.cuotaBox}>
                  <Text>Cuota Over 1.9</Text>
                  <Input></Input>
                </View>
                <View style={styles.cuotaBox}>
                  <Text>Cuota Over 1.9</Text>
                  <Input></Input>
                </View>
              </View>
            </View>
            <View style={styles.apuestaContainer}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>3.5GOLES</Text>
              </View>
              <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={styles.cuotaBox}>
                  <Text>Cuota Over 2.8</Text>
                  <Input></Input>
                </View>
                <View style={styles.cuotaBox}>
                  <Text>Cuota Over 1.43</Text>
                  <Input></Input>
                </View>
              </View>
            </View>
 */}
          </View>
          <Button title='Apostar' buttonStyle={{ borderRadius: 20, marginTop: 20, backgroundColor: "#76ff03" }} titleStyle={{ color: "black" }}></Button>
        </View>
        <View >

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: '#00c856'
  },
  infoContainer: {
    flex: 1,
    padding: 4,
    flexDirection: 'column',
  },
  apuestaContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#76ff03',
    padding: 10,
    borderRadius: 30,
    margin: 5
  },
  cuotaBox: {
    flex: 3,
    alignItems: 'center',
  },
});
export default ApuestaScreen;