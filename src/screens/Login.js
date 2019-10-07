import React, { Component } from 'react';
// import {Input, Text, Button, Container, Item, Content, Form, Icon } from 'native-base'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard ,Dimensions, StatusBar, Platform} from 'react-native';
import { Spinner } from '../components/Spinner';
import { connect } from 'react-redux';

import { setEmail, setPassword ,storeToken, loginUser} from './../actions/authActions'

const { width, height } = Dimensions.get("window");

class Login extends Component {
    static navigationOptions = {
        title: 'Log in',
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
      };
    
    constructor(props) {
        super(props);
        this.state = {
            email:null,
            password: null,
            error:''
        }
    }
   // form validations
    validate_fields= () => {
        const {email,password} = this.state;
        if(email!==null && password!==null){
            return true;
        }else{
            return false;
        }
    }
   onButtonLogin =async()=>{
            const {email,password} = this.state;
            console.log('er1',this.state.error)

            if(this.validate_fields()){
                this.props.loginUser( { nav: this.props.navigation, email, password} );
            }else{
                this.setState({
                    error: 'Please enter email and password.'
                })
            }
        }
       componentWillReceiveProps(nextProps){
        if(this.props.error!== nextProps.error){
            this.setState({
                error: nextProps.error
            })
        }

    }


    render() {
        if (this.props.loading) {
            return <Spinner size="large" />;
         }
        return (
            <View style={styles.container}>
               <StatusBar hidden={true} />
                <TextInput style={styles.inputBox}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder="Email"
                    placeholderTextColor="#002f6c"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()} />

                <TextInput style={styles.inputBox}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#002f6c"
                    ref={(input) => this.password = input}
                />
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => this.onButtonLogin()}>
                    <Text style={styles.buttonText} >Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        height:40,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#82B2B8',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    errorTextStyle: {
        fontSize: 12,
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'red'
      },
});

const mapStateToProps = ({auth}) => {
    const { email, password, error, isLoggedIn, loading} = auth
    return { email, password, error,isLoggedIn, loading}
};

export default connect( mapStateToProps, {
    loginUser,
    setEmail,
    setPassword
})(Login);