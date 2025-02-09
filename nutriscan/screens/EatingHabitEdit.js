import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import Group21 from "../assets/group-21.svg";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const EatingHabitEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.eatingHabitEdit, styles.iconLayout]}>
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
        groupViewTop={102}
        groupViewLeft={26}
        addEatingHabit="Add Eating Habit"
      />
      <Group21 style={styles.eatingHabitEditChild} width={60} height={60} />
      <Text style={styles.eatingHabits}>Eating Habits</Text>
      <GroupComponent
        groupViewTop={102}
        groupViewLeft={26}
        addEatingHabit="Add Eating Habit"
      />
      <Group21 style={styles.eatingHabitEditChild} width={60} height={60} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
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
  eatingHabitEditChild: {
    top: 119,
    left: 66,
    position: "absolute",
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
  eatingHabitEdit: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
  },
});

export default EatingHabitEdit;
