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
class RegistrarScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#00c856', flex: 1 }} >
                <StatusBar barStyle="dark-content" />
                <View style={{ backgroundColor: '#00c856', }}>

                    <Input
                        placeholder='UserName'
                        leftIcon={{
                            type: 'material',
                            name: 'account-box'
                        }}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={{
                            type: 'material',
                            name: 'lock'
                        }} secureTextEntry={true}
                    />

                    <Input
                        placeholder='Email'
                        leftIcon={{
                            type: 'material',
                            name: 'email'
                        }}
                    />
                    <Input
                        placeholder='Nombre'
                        leftIcon={{
                            type: 'material',
                            name: 'lock'
                        }}
                    />
                    <Input
                        placeholder='Apellido'
                        leftIcon={{
                            type: 'material',
                            name: 'lock'
                        }}
                    />
                    <Input
                        placeholder='NIF'
                        leftIcon={{
                            type: 'material',
                            name: 'lock'
                        }}
                    />
                    <DatePicker></DatePicker>
                    <Button title='Entrar' buttonStyle={{ borderRadius: 30, margin: 40, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>
                </View>
            </View>
        )
    }
}

export default RegistrarScreen;