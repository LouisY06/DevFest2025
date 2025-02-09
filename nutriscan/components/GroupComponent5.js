import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import GroupComponent3 from "./GroupComponent3";
import Lsiconminusoutline from "../assets/lsiconminusoutline.svg";

const GroupComponent5 = () => {
  return (
    <View style={styles.groupParent}>
      <GroupComponent3 moreBuff="More Buff" proteinEater="Protein Eater" />
      <GroupComponent3 moreBuff="More Buff" proteinEater="Protein Eater" />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/9571346-2.png")}
      />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/9571346-2.png")}
      />
      <GroupComponent3 moreBuff="More Buff" proteinEater="Protein Eater" />
      <GroupComponent3 moreBuff="More Buff" proteinEater="Protein Eater" />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/9571346-2.png")}
      />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/9571346-2.png")}
      />
      <GroupComponent3 moreBuff="More Buff" proteinEater="Protein Eater" />
      <GroupComponent3 moreBuff="More Buff" proteinEater="Protein Eater" />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/9571346-2.png")}
      />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/9571346-2.png")}
      />
      <GroupComponent3 moreBuff="More Buff" proteinEater="Protein Eater" />
      <GroupComponent3 moreBuff="Omnivore" proteinEater="Everything goes!" />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/179267112.png")}
      />
      <Lsiconminusoutline
        style={[styles.lsiconminusOutline, styles.iconPosition]}
        width={30}
        height={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 19,
    position: "absolute",
  },
  icon: {
    left: 33,
    width: 60,
    height: 60,
  },
  lsiconminusOutline: {
    left: 285,
  },
  groupParent: {
    top: 102,
    left: 26,
    width: 333,
    height: 157,
    position: "absolute",
  },
});

export default GroupComponent5;
