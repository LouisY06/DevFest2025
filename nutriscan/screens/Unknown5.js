import * as React from "react";
import { ImageBackground, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Unknown5 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.unknown13}
      onPress={() => navigation.navigate("AchievementScreen")}
    >
      <ImageBackground style={styles.icon} resizeMode="cover" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  unknown13: {
    height: 50,
    width: "100%",
  },
});

export default Unknown5;
