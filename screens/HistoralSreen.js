import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,

} from 'react-native';

import { Header, SearchBar, Image, Input, Button, ButtonGroup } from 'react-native-elements'
import { Botonera } from '../componentes/Botonera'
import DatePicker from 'react-native-datepicker';
import {ApuestaHistorial} from '../componentes/ApuestaHistorial'
class LoginScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#00c856', flex: 1 }} >
                <StatusBar barStyle="dark-content" />
                <Header
                    leftComponent={{ icon: 'backspace' }}
                    centerComponent={<Text h2>Mensajes</Text>}
                    containerStyle={{
                        backgroundColor: '#00c856',
                    }}></Header>
                <ScrollView>
                <ApuestaHistorial></ApuestaHistorial>
                <ApuestaHistorial></ApuestaHistorial>
                <ApuestaHistorial></ApuestaHistorial>
                <ApuestaHistorial></ApuestaHistorial>
                <ApuestaHistorial></ApuestaHistorial>
                <ApuestaHistorial></ApuestaHistorial>
                <ApuestaHistorial></ApuestaHistorial>
                </ScrollView>
            </View >
        )
    }
}




export default LoginScreen;