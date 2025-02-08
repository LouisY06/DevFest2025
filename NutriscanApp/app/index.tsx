import React, { useState } from 'react';
import { View, Text, Button, Image, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function FoodScanner() {
    const [image, setImage] = useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = useState("Waiting for analysis...");
    const [loading, setLoading] = useState(false);

    // Open camera to take a picture
    const takePhoto = async () => {
        // ✅ Request Camera Permissions First
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("Permission Denied", "You need to grant camera permissions to take a photo.");
            return;
        }
    
        // ✅ Open Camera
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
    
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    // Upload image to backend for analysis
    const analyzeImage = async () => {
        if (!image) {
            Alert.alert("Error", "Please take a picture first.");
            return;
        }
    
        setLoading(true);
        let formData = new FormData();
        formData.append("file", {
            uri: image,
            name: "image.jpg",
            type: "image/jpeg",
        } as any);
    
        try {
            let response = await fetch("http://10.207.5.135:8080/analyze", {
                method: "POST",
                headers: { "Content-Type": "multipart/form-data" },
                body: formData,
            });
    
            let jsonResponse = await response.json();
            console.log("LLM Response:", jsonResponse);  // 👀 Debug output
            setAnalysisResult(jsonResponse.response);
        } catch (error) {
            console.error("API Error:", error);
            Alert.alert("Error", "Failed to analyze image.");
        }
        setLoading(false);
    };
   

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button title="Take Photo" onPress={takePhoto} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, margin: 10 }} />}
            <Button title="Analyze Food" onPress={analyzeImage} disabled={loading} />
            {loading ? <ActivityIndicator size="large" color="blue" /> : <Text>{analysisResult}</Text>}
        </View>
    );
}
