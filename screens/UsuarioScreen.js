import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,

} from 'react-native';

import { Header, SearchBar, Image, Input, Button, ButtonGroup, Icon } from 'react-native-elements'

import { Botonera } from '../componentes/Botonera';
import DatePicker from 'react-native-datepicker';

class UsuarioScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#00c856', flex: 1, flexDirection: 'column', justifyContent: 'center' }} >
                <View style={{ flex: 1 }}>
                    <Header
                        centerComponent={{ text: 'Usuario', style: { color: 'black', fontSize: 30, } }}
                        rightComponent={{ icon: 'android', color: 'black' }}
                        backgroundColor='#00c856'
                    />
                </View>
                <View style={{ flex: 2, alignItems: 'center' }}>
                    <Image
                        source={{ uri: "https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png" }}
                        style={{ width: 70, height: 70 }}
                    />
                    <Text>Wei Luo</Text>
                </View>
                <Input
                    placeholder='Password'
                    leftIcon={{
                        type: 'material',
                        name: 'lock'
                    }} secureTextEntry={true}

                />
{/*                 <Icon
                    name='home'
                    type='material'
                    color='#00aced' /> */}

                <View style={{ flex: 3 }}>

                    <Button title='Datos Personal' buttonStyle={{ borderRadius: 30, margin: 10, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>
                    <Button title='Historial Apuestas' buttonStyle={{ borderRadius: 30, margin: 10, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>
                    <Button title='Log Out' buttonStyle={{ borderRadius: 30, margin: 10, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>
                </View>
            </View>
        )
    }
}

export default UsuarioScreen;