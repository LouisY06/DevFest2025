import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import Group21 from "../assets/group-21.svg";
import GroupComponent5 from "../components/GroupComponent5";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AddEatingHabit = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.addEatingHabit, styles.iconLayout]}>
      <Text style={styles.eatingHabits}>Eating Habits</Text>
      <Pressable
        style={styles.arrowDown}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowdown.png")}
        />
      </Pressable>
      <GroupComponent
        groupViewTop={308}
        groupViewLeft={31}
        addEatingHabit="Add Eating Habit"
      />
      <Group21 style={styles.addEatingHabitChild} width={60} height={60} />
      <GroupComponent5 />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  eatingHabits: {
    marginLeft: -52,
    top: 41,
    left: "50%",
    fontSize: FontSize.headline5_size,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.headline5,
    color: Color.grey700,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrowDown: {
    left: 26,
    top: 39,
    width: 24,
    height: 24,
    position: "absolute",
  },
  addEatingHabitChild: {
    top: 326,
    left: 71,
    position: "absolute",
  },
  addEatingHabit: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
  },
});

export default AddEatingHabit;
