import React, { useState } from "react";
import { 
    View, 
    Text, 
    Button, 
    Image, 
    ActivityIndicator, 
    Alert, 
    ScrollView, 
    StyleSheet 
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function FoodScanner() {
    const [image, setImage] = useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // ✅ Open Camera
    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Permission Denied", "You need to grant camera permissions to take a photo.");
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

    // ✅ Upload Image for Analysis
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
            let response = await fetch("http://10.207.5.135:8080/analyze2", {
                method: "POST",
                headers: { "Content-Type": "multipart/form-data" },
                body: formData,
            });

            let jsonResponse = await response.json();
            console.log("LLM Response:", jsonResponse);
            setAnalysisResult(jsonResponse.response);
        } catch (error) {
            console.error("API Error:", error);
            Alert.alert("Error", "Failed to analyze image.");
        }
        setLoading(false);
    };

    // ✅ Parse & Display Analysis Result
    const renderAnalysisResult = () => {
        if (!analysisResult) return <Text style={styles.responseText}>No analysis available.</Text>;

        try {
            const parsedResult = JSON.parse(analysisResult);
            return (
                <View style={styles.responseContainer}>
                    <Text style={styles.sectionTitle}>Food Analysis:</Text>
                    {parsedResult.main_food_items?.map((item: any, index: number) => (
                        <View key={index} style={styles.resultItem}>
                            <Text>Name: {item.name}</Text>
                            <Text>Alternative: {item.alternative}</Text>
                            <Text>Calories: {item.calories}</Text>
                        </View>
                    ))}
                    {parsedResult.total_calories !== undefined && (
                        <Text style={styles.sectionTitle}>Total Calories: {parsedResult.total_calories}</Text>
                    )}
                </View>
            );
        } catch (error) {
            return <Text style={styles.responseText}>{analysisResult}</Text>;
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Take Photo" onPress={takePhoto} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Analyze Food" onPress={analyzeImage} disabled={loading} />
            
            {loading && <ActivityIndicator size="large" color="blue" />}
            
            <ScrollView style={styles.responseBox}>{renderAnalysisResult()}</ScrollView>
        </View>
    );
}

// ✅ Styles for Better UI
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
        borderRadius: 10,
    },
    responseBox: {
        width: "100%",
        marginTop: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        maxHeight: 300,
    },
    responseContainer: {
        padding: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    resultItem: {
        marginBottom: 10,
        backgroundColor: "#e0e0e0",
        padding: 10,
        borderRadius: 5,
    },
    responseText: {
        fontSize: 16,
        color: "#333",
        marginBottom: 5,
    },
});

