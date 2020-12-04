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

export class Apuesta extends Component {
    render() {
        return (
            <View style={styles.apuestaContainer}>
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
