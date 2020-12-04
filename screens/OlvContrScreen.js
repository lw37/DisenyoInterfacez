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
import { Botonera } from '../componentes/Botonera';
import DatePicker from 'react-native-datepicker';
class OlvContrScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#00c856', flex: 1, flexDirection: 'column', justifyContent:'center'}} >
                <StatusBar barStyle="dark-content" />
                <View style={{ flex: 1,padding:120}}>

                    <Text style={{fontSize:20}}>Escribe tu correo para recuperar la contraseña</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Input
                        placeholder='Email'
                        leftIcon={{
                            type: 'material',
                            name: 'email'
                        }}
                    />
                </View>
                <Button title='Enviar' buttonStyle={{ borderRadius: 30, margin: 40, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>

            </View>
        )
    }
}

export default OlvContrScreen;