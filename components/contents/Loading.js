import React from 'react';
import {View, Text} from 'react-native';

const Loading = () => {
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#000000',
          height: '100%',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#ffffff',
          }}>
          Loading
        </Text>
      </View>
    </>
  );
};

export default Loading;
