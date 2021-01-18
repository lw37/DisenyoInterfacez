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
        apuestas: [{ equipoLocal: 'Valencia', equipoVisitante:"Bacelona", fecha: '2077-12-21', dinero: 600, cuota: 1.5, nombre: 'Wei', apellido: 'luo', pago: "Visa" },
        { equipoLocal: 'Valencia', equipoVisitante:"Bacelona", fecha: '2077-12-21', dinero: 600, cuota: 1.5, nombre: 'Wei', apellido: 'luo', pago: "Visa" },
        { equipoLocal: 'Valencia', equipoVisitante:"Bacelona", fecha: '2077-12-21', dinero: 600, cuota: 1.5, nombre: 'Wei', apellido: 'luo', pago: "Visa" },
        { equipoLocal: 'Valencia', equipoVisitante:"Bacelona", fecha: '2077-12-21', dinero: 600, cuota: 1.5, nombre: 'Wei', apellido: 'luo', pago: "Visa" },
        { equipoLocal: 'Valencia', equipoVisitante:"Bacelona", fecha: '2077-12-21', dinero: 600, cuota: 1.5, nombre: 'Wei', apellido: 'luo', pago: "Visa" },
        { equipoLocal: 'Valencia', equipoVisitante:"Bacelona", fecha: '2077-12-21', dinero: 600, cuota: 1.5, nombre: 'Wei', apellido: 'luo', pago: "Visa" },
        { equipoLocal: 'Valencia', equipoVisitante:"Bacelona", fecha: '2077-12-21', dinero: 600, cuota: 1.5, nombre: 'Wei', apellido: 'luo', pago: "Visa" }
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
                <FlatList
                    data={this.state.apuestas}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View >
                                <ApuestaHistorial
                                    equipoLocal={item.equipoLocal}
                                    equipoVisitante={item.equipoVisitante}
                                    fecha={item.fecha}
                                    dinero={item.dinero}
                                    cuota={item.cuota}
                                    nombre={item.nombre}
                                    apellido={item.apellido}
                                    pago={item.pago}
                                />
                            </View>
                        );
                    }}
                />



            </View >
        )
    }
}




export default LoginScreen;