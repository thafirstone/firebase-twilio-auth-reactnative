import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyA3QEaprY9kJ-HiKddBfCVnN2hvTAN0dEA',
      authDomain: 'one-time-pass-reactnative.firebaseapp.com',
      databaseURL: 'https://one-time-pass-reactnative.firebaseio.com',
      projectId: 'one-time-pass-reactnative',
      storageBucket: 'one-time-pass-reactnative.appspot.com',
      messagingSenderId: '1233496423', // please verify messengerId
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
