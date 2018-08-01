import React ,{Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm'


export default class App extends Component{
    componentWillMount(){
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyCAy5YK8LLNc9T8mTvYR1C3MnaF1eGc8Ps',
                authDomain: 'authentication-d35d4.firebaseapp.com',
                databaseURL: 'https://authentication-d35d4.firebaseio.com',
                projectId: 'authentication-d35d4',
                storageBucket: 'authentication-d35d4.appspot.com',
                messagingSenderId: '658873655693'
              }
        );
    }
 render(){
     return(
        <View>
            <Header title="Authentication"/>
            <Text>vaibhav !! </Text>
            <LoginForm/>
        </View>
     );
 }
}