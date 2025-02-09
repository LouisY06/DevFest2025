import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Gap, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameComponent3 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.frameParent}
      onPress={() => navigation.navigate("LouisProfile")}
    >
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text, styles.textFlexBox]}>{`75 `}</Text>
        <Text style={[styles.vegan, styles.textFlexBox]}>Vegan</Text>
      </View>
      <View style={[styles.louisParent, styles.parentPosition]}>
        <Text style={[styles.louis, styles.louisFlexBox]}>Louis</Text>
        <Text style={[styles.jan2022, styles.louisFlexBox]}>10 jan 2022</Text>
      </View>
      <View style={[styles.frameChild, styles.framePosition]} />
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/frame11.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    gap: Gap.gap_md,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "right",
    lineHeight: 20,
  },
  louisFlexBox: {
    textAlign: "left",
    color: Color.grey900,
  },
  framePosition: {
    height: 65,
    width: 65,
    left: 7,
    top: 7,
    position: "absolute",
  },
  text: {
    color: Color.grey900,
    textAlign: "right",
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
    fontSize: FontSize.headline5_size,
  },
  vegan: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.grey700,
    fontSize: FontSize.size_xs,
  },
  parent: {
    top: 19,
    left: 269,
    alignItems: "flex-end",
  },
  louis: {
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.headline5_size,
    textAlign: "left",
  },
  jan2022: {
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  louisParent: {
    top: 15,
    left: 84,
  },
  frameChild: {
    borderRadius: Border.br_13xl_5,
    backgroundColor: Color.grey500,
  },
  frameIcon: {
    overflow: "hidden",
  },
  frameParent: {
    top: 510,
    left: 34,
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 327,
    height: 79,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FrameComponent3;
