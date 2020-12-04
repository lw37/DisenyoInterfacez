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
class PagoScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#00c856', flex: 1, flexDirection: 'column', justifyContent: 'center' }} >
              <View style={{flex:1}}>
                <Header
          centerComponent={{ text: 'Apuesta', style: { color: 'black', fontSize: 30, } }}
          leftComponent={{ icon: 'backspace' }}
          backgroundColor='#00c856'
        />
        </View>
               <View>
                <StatusBar barStyle="dark-content" />

                                   <Input
                        placeholder='Tarjeta Credito'
                        leftIcon={{
                            type: 'material',
                            name: 'lock'
                        }}
                    />
                                        <Input
                        placeholder='Nombre y Apellido'
                        leftIcon={{
                            type: 'material',
                            name: 'lock'
                        }}
                    />
                                        <Input
                        placeholder='Contraseña'
                        leftIcon={{
                            type: 'material',
                            name: 'lock'
                        }}
                    />
                    <DatePicker></DatePicker>
                <Button title='Enviar' buttonStyle={{ borderRadius: 30, margin: 40, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>
</View>
            </View>
        )
    }
}

export default PagoScreen;