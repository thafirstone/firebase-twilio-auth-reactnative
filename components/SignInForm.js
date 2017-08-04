import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-pass-reactnative.cloudfunctions.net/';
export default class SignInForm extends Component {
  state = { phone: '', code: '' };
  handleSubmit= async () => {
    try {
      const { data } = await axios.post(`${ROOT_URL}verifyOneTimePassword`, { phone: this.state.phone, code: this.state.code });
      // this.setState({ token: data.token });
      firebase.auth().signInWithCustomToken(data.token);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>
          Enter phone Number:
          </FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
          <FormLabel>Enter the code:</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}
