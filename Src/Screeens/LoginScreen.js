import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import {connect, connectAdvanced} from 'react-redux';
import {onUserLogin} from '../redux'

export default class LoginScreen extends React.Component {   
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // this.animation.play();
        // // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
      }
    render(){
        return (
            <View style={styles.mainContainer}>
                <LottieView       
        source={require('../assets/doctor.json')}
        style={{height:100,width:100}}
      />
            </View>

        );
}
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: '#32a879',
        
    },
    inputContainer: {
        height: hp('10%'),
        width: wp('80%'),
        backgroundColor: '#5bf540',
        borderColor: 'white',
        borderWidth: 2,
        paddingTop: 20,
        paddingLeft: 10,
        borderRadius: 20
    },
    loginButton: {
        height: 50,
        width: 200,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textStyle: {
        color: '#eb0250',
        fontSize: 30,
        fontWeight: 'bold',
    }
})





 {/* <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>ലോഗിൻ സ്‌ക്രീൻ</Text>
                <TextInput style={styles.inputContainer}
                    placeholder='ഉപയോക്തൃനാമം'
                    placeholderTextColor="#eb0250"
                />
                <View style={{ paddingTop: 20 }}>
                    <TextInput style={styles.inputContainer}
                        placeholder='പാസ്വേഡ്'
                        placeholderTextColor="#eb0250" />
                </View>
                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={styles.loginButton}
                        onPress={() => onUserLogin({userName:'geetha',password:'Pass@1234'})}>
                        <Text style={styles.textStyle}>
                            ലോഗിൻ</Text>
                    </TouchableOpacity>
                </View> */}
