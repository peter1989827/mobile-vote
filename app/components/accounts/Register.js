import React, { Component } from 'react';

import { Text, View, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button } from 'react-native-elements';
import styles from './styles';
import Form from './Form';

const propTypes = {
  login: PropTypes.bool,
  title: PropTypes.string,
};

const defaultProps = {
  login: false,
  title: 'Sign Up',
};

class Login extends Component {
  state = {
    form: {
      email: '',
      password: '',
    },
  };

  onFormChange = (field, value) => {
    const { form } = this.state;
    form[field] = value;
    this.setState({ form });
  };

  handleButtonPress = () => {
    const { form } = this.state;

    if (!_.isEmpty(form.email) && !_.isEmpty(form.password)) {
      this.props.actions.onSignUp(form);
    } else {
      Alert.alert(null, "Email or Password can't be blank.", [
        {
          text: 'OK',
          onPress: () => {
            if (_.isEmpty(form.email)) {
              this.formRef.emailField.focus();
            } else if (_.isEmpty(form.password)) {
              this.formRef.passwordField.focus();
            }
          },
        },
      ]);
    }
  };

  onButtonPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Login');
  };

  render() {
    const { form } = this.state;
    const { isFetching } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Text style={styles.headLabel}>Outvote</Text>
        </View>
        <View style={styles.formConatiner}>
          <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 16 }}>
            Sign Up
          </Text>

          <Form
            onFormChange={this.onFormChange}
            form={form}
            errors={this.props.errors}
            ref={ref => (this.formRef = ref)}
          />

          <View style={{ marginTop: 16 }}>
            <Button
              onPress={this.handleButtonPress}
              title="Sign Up"
              backgroundColor={'#4154B2'}
              disabled={isFetching}
              loading={isFetching}
            />
          </View>

          <View style={[styles.footerContainer, styles.center]}>
            <Text style={{ paddingBottom: 16, paddingTop: 16 }}>
              Already have an account?
            </Text>

            <TouchableOpacity onPress={this.onButtonPress}>
              <Text style={{ textDecorationLine: 'underline' }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
