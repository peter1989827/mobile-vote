import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const propTypes = {
  onPress: PropTypes.func,
  iconName: PropTypes.string,
};

const defaultProps = {
  onPress: () => {},
  iconName: 'ios-notifications-outline',
};

const LeftButton = ({ onPress, iconName }) =>
  <TouchableOpacity
    onPress={onPress}
    style={{
      width: 50,
      alignItems: 'center',
      marginTop: Platform.OS === 'ios' ? 5 : 15,
    }}
  >
    <Ionicons name={iconName} size={32} />
  </TouchableOpacity>;

LeftButton.propTypes = propTypes;
LeftButton.defaultProps = defaultProps;

export default LeftButton;
