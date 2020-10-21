import React, { memo } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";

const Spinner: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color={"black"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default memo(Spinner);
