import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Lsiconminusoutline from "../assets/lsiconminusoutline.svg";
import GroupComponent from "../components/GroupComponent";
import Group21 from "../assets/group-21.svg";
import Group29 from "../assets/group-29.svg";
import { Color, FontSize, FontFamily, Border, Gap } from "../GlobalStyles";

const Allergies = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.allergies, styles.iconLayout]}>
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
      <Text style={styles.allergies1}>Allergies</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Lsiconminusoutline
          style={styles.lsiconminusOutline}
          width={30}
          height={30}
        />
        <View style={[styles.peanutAllergyParent, styles.addWrapperLayout]}>
          <Text style={[styles.peanutAllergy, styles.peanutAllergyFlexBox]}>
            Peanut Allergy
          </Text>
          <Text style={[styles.deathlyAllergic, styles.peanutAllergyFlexBox]}>
            Deathly allergic
          </Text>
        </View>
      </View>
      <Image
        style={[styles.icon1, styles.icon1Layout]}
        contentFit="cover"
        source={require("../assets/9849878-1.png")}
      />
      <GroupComponent
        groupViewTop={310}
        groupViewLeft={28}
        addEatingHabit="Add Allergy"
      />
      <Group21
        style={[styles.allergiesChild, styles.icon1Layout]}
        width={60}
        height={60}
      />
      <View style={[styles.allergiesInner, styles.addWrapperLayout]}>
        <View style={[styles.addWrapper, styles.addWrapperLayout]}>
          <Text style={[styles.peanutAllergy, styles.peanutAllergyFlexBox]}>
            Add
          </Text>
        </View>
      </View>
      <Group29
        style={[styles.allergiesChild, styles.icon1Layout]}
        width={60}
        height={60}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupChildLayout: {
    height: 157,
    width: 333,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  addWrapperLayout: {
    height: 43,
    width: 185,
    position: "absolute",
  },
  peanutAllergyFlexBox: {
    textAlign: "left",
    color: Color.grey700,
  },
  icon1Layout: {
    height: 60,
    width: 60,
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
  allergies1: {
    marginLeft: -35,
    top: 41,
    left: "50%",
    fontSize: FontSize.headline5_size,
    lineHeight: 20,
    textAlign: "center",
    color: Color.grey700,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    height: 157,
    width: 333,
    position: "absolute",
  },
  lsiconminusOutline: {
    top: 19,
    left: 285,
    position: "absolute",
  },
  peanutAllergy: {
    fontSize: FontSize.headline4_size,
    lineHeight: 24,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    textAlign: "left",
  },
  deathlyAllergic: {
    fontSize: FontSize.headline6_size,
    fontFamily: FontFamily.interRegular,
  },
  peanutAllergyParent: {
    top: 98,
    left: 43,
    gap: Gap.gap_md,
  },
  rectangleParent: {
    top: 104,
    left: 28,
  },
  icon1: {
    top: 123,
    left: 61,
  },
  allergiesChild: {
    top: 328,
    left: 68,
  },
  addWrapper: {
    left: 0,
    top: 0,
  },
  allergiesInner: {
    top: 408,
    left: 71,
  },
  allergies: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
  },
});

export default Allergies;
