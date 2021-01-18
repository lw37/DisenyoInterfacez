import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList

} from 'react-native';

import { Header, SearchBar, Image, Input, Button, ButtonGroup } from 'react-native-elements'
import { Botonera } from '../componentes/Botonera'
import DatePicker from 'react-native-datepicker';
import { ApuestaHistorial } from '../componentes/ApuestaHistorial'
class LoginScreen extends Component {
    state = {
        apuestas: [{ evento: 'Valencia VS Bacelona',fecha:'2077-12-21',dinero:600 }, { evento: 'Valencia VS Bacelona',fecha:'2077-12-21',dinero:600 },
        { evento: 'Valencia VS Bacelona',fecha:'2077-12-21',dinero:600 },{ evento: 'Valencia VS Bacelona',fecha:'2077-12-21',dinero:600 },
        { evento: 'Valencia VS Bacelona',fecha:'2077-12-21',dinero:600 },{ evento: 'Valencia VS Bacelona',fecha:'2077-12-21',dinero:600 },
        ]
    }
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
                </ScrollView>
                <FlatList
            data={this.state.apuestas}
            keyExtractor={(item, index)=>index.toString()}
            renderItem={({item})=>{
              return(
                <View > 
                  <Text>Evento: {item.evento} Fecha:{item.fecha}  Dinero apostado:{item.dinero}</Text>
                </View>
                
              );
            }}
          />
              


            </View >
        )
    }
}




export default LoginScreen;