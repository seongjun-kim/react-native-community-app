import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";

const imageUrl = "http://clipart-library.com/2018-gallery/donut-clipart-13.png";
const Login = ({ onLogin }) => {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Image
          style={{
            width: 200,
            height: 200,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={{
            uri: imageUrl,
          }}
        />
        <Text style={styles.logoText}>{"LOGO"}</Text>

        <View style={{ paddingBottom: 20 }} />

        <TextInput
          style={styles.inputBox}
          onChangeText={setID}
          value={ID}
          placeholder={"아이디"}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={setPW}
          value={PW}
          placeholder={"비밀번호"}
          secureTextEntry={true}
        />

        <View style={{ paddingBottom: 20 }} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onLogin(true);
          }}
        >
          <Text style={styles.buttonText}>{"로그인"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{"회원가입"}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  logoText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 20,
  },
  inputBox: {
    alignSelf: "center",
    height: 50,
    width: 200,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#008FFF",
    width: 100,
    height: 40,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
    ...Platform.select({
      ios: {
        lineHeight: 40, // as same as button height
      },
      android: {
        textAlignVertical: "center",
      },
    }),
  },
});

export default Login;
