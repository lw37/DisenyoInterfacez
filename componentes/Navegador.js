
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { Button } from 'react-native-elements';


export class Navegador extends Component {
    render() {
        return (

            <View style={styles.container1}>
                <View style={styles.buttonContainer}>
                    <Button title="Eventos" buttonStyle={{ backgroundColor: "#76ff03" }} titleStyle={{ color: "black" }} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Usuarios" buttonStyle={{ backgroundColor: "#76ff03" }} titleStyle={{ color: "black" }} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems:'flex-end'
    },
    buttonContainer: {
        flex: 1,
    },

});
