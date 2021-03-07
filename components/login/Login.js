import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.body}>Hello! Login First!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    justifyContent: 'center',
    height: '100%',
  },
  body: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Login;
