// Layout.tsx

import * as vectorIcons from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Slot, useRouter } from "expo-router";
import React from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Layout() {
  const router = useRouter();

  // 📸 Open iOS Camera
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "You need to grant camera access.");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const photoUri = result.assets[0].uri;
      console.log("Captured Image:", photoUri);
    
      // ✅ Navigate to /post_photo with the photoUri as a param
      console.log("router push");
      router.push({
        pathname: "/post_photo",
        params: { photoUri },
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* 📌 Renders the current screen */}
      <Slot />

      {/* 📸 Custom Bottom Navigation with Floating Camera Button */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.push("/home")}>
            <vectorIcons.Ionicons name="home-outline" size={28} color="#777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/profile")}>
            <vectorIcons.Ionicons name="person-outline" size={28} color="#777" />
          </TouchableOpacity>

          {/* Floating Camera Button - Opens iOS Camera */}
          <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
            <vectorIcons.Ionicons name="camera" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/streaks")}>
            <vectorIcons.Ionicons name="flame-outline" size={28} color="#777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Settings")}>
            <vectorIcons.Ionicons name="settings-outline" size={28} color="#777" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* 🔽 CUSTOM BOTTOM NAVIGATION 🔽 */
  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  bottomNav: {
    position: "absolute",
    bottom: 15,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 40,
    height: 60,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cameraButton: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    marginLeft: -35,
    backgroundColor: "#4A9780",
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});