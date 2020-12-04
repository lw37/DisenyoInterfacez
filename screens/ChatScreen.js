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
class ChatScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#00c856', flex: 1, flexDirection: 'column', justifyContent:'center'}} >
                <StatusBar barStyle="dark-content" />
                <View style={{ flex: 1,padding:120}}>

                    <Text style={{fontSize:20}}>Esto es un chat</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Input
                        placeholder='Mesnjases........'
                        leftIcon={{
                            type: 'material',
                            name: 'send'
                        }}
                    />
                </View>
                <Button title='Enviar' buttonStyle={{ borderRadius: 30, margin: 40, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>

            </View>
        )
    }
}

export default ChatScreen;