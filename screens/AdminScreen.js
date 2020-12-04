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
import { ApuestaHistorial } from '../componentes/ApuestaHistorial'
class AdminScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#00c856', flex: 1 }} >
                <StatusBar barStyle="dark-content" />
                <Header
                    leftComponent={{ icon: 'backspace' }}
                    centerComponent={<Text h1>Admin</Text>}
                    containerStyle={{
                        backgroundColor: '#00c856',
                    }}></Header>
                    <View style={{flex:20,justifyContent:'flex-end'}}>
                    <Button title='EnAqui debe salir una lista de opcionestrar' buttonStyle={{ borderRadius: 30, margin: 40, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>
                </View>
            </View >
        )
    }
}




export default AdminScreen;