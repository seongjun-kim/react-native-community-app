import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Dimensions, Text, View, Animated } from "react-native";
import * as Progress from "react-native-progress";

const w = Dimensions.get("window");
const imageUrl = "http://clipart-library.com/2018-gallery/donut-clipart-13.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Loading = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(0);
  let completed = 0;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{
          uri: `${imageUrl}?w=10&buster=${Math.random()}`,
        }}
        style={[
          {
            width: w.width / 2,
            height: w.width / 2,
            resizeMode: "contain",
            marginBottom: 100,
            opacity: fadeAnim,
          },
        ]}
        onLoad={() => {
          const intervalObj = setInterval(() => {
            completed += 0.1;
            setProgress(completed);
            if (completed >= 1) {
              clearInterval(intervalObj);
            }
          }, 100);
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          marginBottom: 100,
        }}
      >
        LOGO
      </Text>
      <Progress.Bar progress={progress} width={200} />
    </View>
  );
};

export default Loading;
