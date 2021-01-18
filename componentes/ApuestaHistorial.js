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

export class ApuestaHistorial extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
                <View style={styles.box}>
                    <View style={{ flex: 2 }}>
                        <Text>{this.props.equipoLocal}</Text>
                        <Text>    VS</Text>
                        <Text>{this.props.equipoVisitante}</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={{ flex: 1, justifyContent: 'space-between', }}>
                            <Text>Cuota: {this.props.cuota}</Text>
                            <Text>Dinero:{this.props.dinero} eur</Text>
                            <Text>{this.props.fecha}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={{ flex: 1, justifyContent: 'space-between', }}>
                            <Text>Nombre:{this.props.nombre}</Text>
                            <Text>Apellido:{this.props.apellido}</Text>
                            <Text>Pago:{this.props.pago}</Text>
                        </View>
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
        justifyContent: 'center',

    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    box: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: '#76ff03',
        padding: 20,
        margin: 8,
        borderRadius: 20,
      
    },
});

