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
    const [feedback, setFeedback] = useState<string | null>(null);
    const [history, setHistory] = useState<any[]>([]);

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
            let response = await fetch("http://10.207.5.135:8080/analyze", {
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

    // ✅ Fetch Feedback from LLM
    const getFeedback = async () => {
        setLoading(true);
        try {
            let response = await fetch("http://10.207.5.135:8080/feedback");
            let jsonResponse = await response.json();
            console.log("Feedback Response:", jsonResponse);
            setFeedback(jsonResponse.feedback);
        } catch (error) {
            console.error("API Error:", error);
            Alert.alert("Error", "Failed to fetch feedback.");
        }
        setLoading(false);
    };

    // ✅ Fetch History from MongoDB
    const getHistory = async () => {
        setLoading(true);
        try {
            let response = await fetch("http://10.207.5.135:8080/history");
            let jsonResponse = await response.json();
            console.log("History Response:", jsonResponse);
            setHistory(jsonResponse.history);
        } catch (error) {
            console.error("API Error:", error);
            Alert.alert("Error", "Failed to fetch history.");
        }
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Button title="Take Photo" onPress={takePhoto} />
            {image && <Image source={{ uri: image }} style={styles.image} />}

            <Button title="Analyze Food" onPress={analyzeImage} disabled={loading} />
            <Button title="Get Feedback" onPress={getFeedback} disabled={loading} />
            <Button title="View History" onPress={getHistory} disabled={loading} />

            {loading && <ActivityIndicator size="large" color="blue" />}

            {/* ✅ Improved UI for Analysis Results */}
            <ScrollView style={styles.responseBox}>
                {analysisResult && (
                    <>
                        <Text style={styles.sectionTitle}>Food Analysis:</Text>
                        <Text style={styles.responseText}>{analysisResult}</Text>
                    </>
                )}

                {feedback && (
                    <>
                        <Text style={styles.sectionTitle}>Health Feedback:</Text>
                        <Text style={styles.responseText}>{feedback}</Text>
                    </>
                )}

                {history.length > 0 && (
                    <>
                        <Text style={styles.sectionTitle}>History:</Text>
                        {history.map((item, index) => (
                            <Text key={index} style={styles.responseText}>
                                - {item.analysis}
                            </Text>
                        ))}
                    </>
                )}
            </ScrollView>
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    responseText: {
        fontSize: 16,
        color: "#333",
        marginBottom: 5,
    },
});
