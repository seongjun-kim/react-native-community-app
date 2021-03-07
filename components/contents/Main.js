import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Login from '../login/Login';

const Main = () => {
  const [loginState, setLoginState] = useState(false);

  setTimeout(() => {
    console.log('change login state!');
    setLoginState(true);
  }, 3000);

  return loginState ? (
    <View style={styles.container}>
      <Text style={styles.body}>Main PAGE</Text>
    </View>
  ) : (
    <Login />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lime',
    justifyContent: 'center',
    height: '100%',
  },
  body: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Main;
