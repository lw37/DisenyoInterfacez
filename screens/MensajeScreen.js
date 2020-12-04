
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,

} from 'react-native';

import {  Text, Header, SearchBar, Image, Button ,Input} from 'react-native-elements'
import  {Botonera} from '../componentes/Botonera'

class Apuesta extends Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header
          leftComponent={{ icon: 'backspace' }}
          centerComponent={<Text h2>Mensajes</Text>}
          containerStyle={{
            backgroundColor: '#00c856',
          }}></Header>
        <ScrollView style={{flex:25}}>

        </ScrollView>
        <Input
  placeholder='INPUT WITH ICON'
  leftIcon={{type:'material',name:'image'}}
  rightIcon={{ type: 'material', name: 'send' }}
/>
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
    buttonContainer: {
      flex: 1,
    },
  
  });
  

export default Apuesta;