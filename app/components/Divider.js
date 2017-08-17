import React from 'react';

import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  divider: {
    marginTop: 15,
    marginBottom: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

function Divider() {
  return <View style={styles.divider} />;
}

export default Divider;
