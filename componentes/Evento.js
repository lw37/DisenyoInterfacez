
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

} from 'react-native';

import { Header, SearchBar, Image, Button } from 'react-native-elements'


export class Evento extends Component{
    render(){
      return(
        <View>
            <Image
              source={{ uri: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/12/18/15766742679480.jpg" }}
              style={{ width: "auto", height: 200 }}
            />
        </View>
      )}
}