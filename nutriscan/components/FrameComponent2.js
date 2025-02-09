import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Gap, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrameComponent2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.frameParent}
      onPress={() => navigation.navigate("LouisProfile")}
    >
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text, styles.textFlexBox]}>{`88 `}</Text>
        <Text style={[styles.omni, styles.textFlexBox]}>Omni</Text>
      </View>
      <View style={[styles.stellaParent, styles.parentPosition]}>
        <Text style={[styles.stella, styles.stellaFlexBox]}>Stella</Text>
        <Text style={[styles.jan2022, styles.stellaFlexBox]}>10 jan 2022</Text>
      </View>
      <View style={styles.frameChild} />
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
  stellaFlexBox: {
    textAlign: "left",
    color: Color.grey900,
  },
  text: {
    fontFamily: FontFamily.headline6,
    color: Color.grey900,
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.headline5_size,
  },
  omni: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.grey700,
    fontSize: FontSize.size_xs,
  },
  parent: {
    top: 17,
    left: 278,
    alignItems: "flex-end",
  },
  stella: {
    fontFamily: FontFamily.inknutAntiquaSemiBold,
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
  stellaParent: {
    top: 15,
    left: 84,
  },
  frameChild: {
    top: 7,
    left: 7,
    borderRadius: Border.br_13xl_5,
    backgroundColor: Color.grey500,
    width: 65,
    height: 65,
    position: "absolute",
  },
  frameParent: {
    top: 372,
    left: 31,
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

export default FrameComponent2;
