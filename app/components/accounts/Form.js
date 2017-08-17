import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import _ from 'lodash';

import styles from './styles';

const propTypes = {
  form: PropTypes.object.isRequired,
  onFormChange: PropTypes.func.isRequired,
};

class Form extends Component {
  render() {
    const { form, onFormChange, errors } = this.props;
    return (
      <View style={{ padding: 16 }}>
        <View style={[styles.inputContainer, styles.center]}>
          <TextInput
            ref={ref => (this.emailField = ref)}
            value={form.email}
            underlineColorAndroid={'transparent'}
            style={[
              styles.input,
              errors && errors.email ? { borderColor: '#D9534F' } : {},
            ]}
            returnKeyType="next"
            placeholder="Email"
            keyboardType="email-address"
            maxLength={40}
            onChangeText={value => onFormChange('email', value.toLowerCase())}
            onSubmitEditing={() => this.passwordField.focus()}
          />
          {errors &&
            errors.email &&
            <Text
              style={{
                alignSelf: 'flex-start',
                marginTop: 5,
                color: '#D9534F',
              }}
            >
              {_.toString(errors.email)}
            </Text>}
        </View>

        <View style={[styles.inputContainer, styles.center]}>
          <TextInput
            ref={ref => (this.passwordField = ref)}
            value={form.password}
            returnKeyType="done"
            secureTextEntry
            maxLength={18}
            underlineColorAndroid={'transparent'}
            style={[
              styles.input,
              errors && errors.password ? { borderColor: '#D9534F' } : {},
            ]}
            placeholder="Password"
            onChangeText={value => onFormChange('password', value)}
          />
          {errors &&
            errors.password &&
            <Text
              style={{
                alignSelf: 'flex-start',
                marginTop: 5,
                color: '#D9534F',
              }}
            >
              {_.toString(errors.password)}
            </Text>}
        </View>
      </View>
    );
  }
}

Form.propTypes = propTypes;

export default Form;
