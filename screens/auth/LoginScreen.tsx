import React, { useReducer } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { loginWithEmail } from "../../firebase/firebaseProvider";
import { Credentials } from "../../types";
import * as Analytics from "expo-firebase-analytics";

const LoginScreen: React.FC = () => {
  const initialState: Credentials = { email: "", password: "" };

  const reducer = (
    state: Credentials,
    action: { type: string; value: string }
  ) => {
    switch (action.type) {
      case "email":
        return { ...state, email: action.value };
      case "password":
        return { ...state, password: action.value };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnLogin = async () => {
    try {
      await loginWithEmail(state.email, state.password);

      // analytics
      Analytics.logEvent("login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => dispatch({ type: "email", value: text })}
          value={state?.email}
        />
        <Text>Access code</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => dispatch({ type: "password", value: text })}
          value={state?.password}
        />
        <Button onPress={handleOnLogin} title="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 8,
    marginVertical: 8,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default LoginScreen;
