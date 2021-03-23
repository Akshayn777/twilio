import React from 'react';
import {StyleSheet,View} from 'react-native';
import LoginScreen from './Src/Screeens/LoginScreen';
import {Provider} from 'react-redux';
import store from './Src/redux/index';

export default class App extends React.Component {
 render(){
    return (        
        <LoginScreen/>
    );
    }
}
const styles = StyleSheet.create({
  mainContainer:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#32a879'
  }
})