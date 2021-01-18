import React, { Component } from 'react';
import {
    import { Header, SearchBar, Image, Input, Button, ButtonGroup } from 'react-native-elements'
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { Botonera } from '../componentes/Botonera';
import DateTimePicker from '@react-native-community/datetimepicker';
import UsuarioScreen from './UsuarioScreen';


class UsuarioDatosScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(Date.now()),
            show: false,
        }
    }
    dataSeleccionada = (e, dataNova) => {
        if (e.type === 'set') {
            this.setState({ date: new Date(dataNova), show: false })
        }
        if (e.type === 'dismissed') {
            console.log('has cancel.lat')
        }
    }

    showDatepicker = () => {
        this.setState({ show: true});
        console.log(this.state.date);
        
    };
    render() {
        return (
            <View style={{ backgroundColor: '#00c856', flex: 1 }} >
                <StatusBar barStyle="dark-content" />
                <View style={{ flex: 2, alignItems: 'center' }}>
                    <Image
                        source={{ uri: "https://assets.stickpng.com/images/584a9b3bb080d7616d298777.png" }}
                        style={{ width: 70, height: 70 }}
                    />
                </View>
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
                    <View>
                        <Button onPress={this.showDatepicker} title={""+this.state.date} />
                        {this.state.show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={this.state.date}
                                mode='date'
                                display="default"
                                onChange={this.dataSeleccionada}
                            />
                        )}
                    </View>
                    <Button title='Entrar' buttonStyle={{ borderRadius: 30, margin: 40, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>
                </View>
            </View>
        )
    }
}

export default UsuarioDatosScreen;