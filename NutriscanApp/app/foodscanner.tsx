import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function FoodScanner() {
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();

  // 📸 Open Camera and Take Photo
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
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={30} color="#4A4A4A" />
      </TouchableOpacity>

      <Text style={styles.header}>Food Scanner</Text>

      {/* Display Image or Prompt to Take Photo */}
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <TouchableOpacity style={styles.retakeButton} onPress={openCamera}>
            <Text style={styles.buttonText}>📷 Retake Photo</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
          <Ionicons name="camera" size={40} color="white" />
          <Text style={styles.buttonText}>Open Camera</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  cameraButton: {
    backgroundColor: "#4A9780",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  retakeButton: {
    backgroundColor: "#FF5733",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

