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
import { Botonera } from '../componentes/Botonera'
import DatePicker from 'react-native-datepicker';
class LoginScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#00c856',flex:1}} >
        <StatusBar barStyle="dark-content" />
        <Image
          source={{ uri: "https://www.freelogodesign.org/file/app/client/thumb/aa454711-0b7f-4c99-9cdb-a9cd18e411a0_200x200.png?1606405500582" }}
          style={{ width: 400, height: 400 }}
          backgroundColor= '#ffffff'
        />
        <View style={{ backgroundColor: '#00c856',}}>
        <Input
          placeholder='UserName/Email'
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
  
        <Button title='Entrar' buttonStyle={{ borderRadius: 30, margin: 40, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>
        <View style={{ flexDirection: 'row', }}>
          <View style={{flex:1 }}>
            <Button title="Olvidar Contraseña" buttonStyle={{borderRadius: 30, margin: 5, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>
          </View>
          <View style={{flex:1 }}>
            <Button title="Registrar" buttonStyle={{borderRadius: 30, margin: 5, backgroundColor: "#76ff03", alignItems: "stretch" }} titleStyle={{ color: "black" }}></Button>
          </View>
        </View>
      </View>
      </View>
    )
  }
}

export default LoginScreen;