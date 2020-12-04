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
                        <Text>Valencia</Text>
                        <Text>    VS</Text>
                        <Text>Bacelona</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={{ flex: 1, justifyContent: 'space-between', }}>
                            <Text>Cuota: 1.5</Text>
                            <Text>Dinero:200 eur</Text>
                            <Text>2077/07/07</Text>
                        </View>
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={{ flex: 1, justifyContent: 'space-between', }}>
                            <Text>Nombre:Wei</Text>
                            <Text>Apellido:Luo</Text>
                            <Text>Pago:Visa</Text>
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

