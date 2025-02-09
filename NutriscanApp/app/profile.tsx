import { Link, useRouter } from 'expo-router';

import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Profile: React.FC = () => {
  const router = useRouter(); // Hook to perform navigation

  // Sample user data – replace these with real data as needed
  const userName: string = "Cooper";
  const profilePictureUri: string =
    "https://example.com/path-to-your-profile-pic.jpg"; // Replace with an actual image URL
  const mostRecentAchievement: string = "Halal Hall of Fame";
  const eatingHabits: string = "Halal, balanced diet";
  const currentScore: number = 56;
  const foodHistory: string[] = [
    "Halal",
    "McDonalds",
    "Apple",
    "Juice",
    "Noodles",
    "Snack",
  ];

  // Navigate to the settings page when the button is pressed
  const handleSettingsPress = () => {
    <Link href="/Settings" style={styles.settingsButton}>
        <Text style={styles.settingsButtonText}>⚙</Text>
    </Link>
  };

  return (
    <View style={styles.container}>
      {/* Header with a back button, title, and settings button */}
      <View style={styles.header}>
        <Link href="/" style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Link>
        <Text style={styles.headerTitle}>Homepage</Text>
        <TouchableOpacity 
  onPress={handleSettingsPress} 
  style={styles.settingsButton}  // You can apply styling here
>
  <Text style={styles.settingsButtonText}>⚙</Text>
</TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Picture and Name */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: profilePictureUri }}
            style={styles.profilePicture}
          />
          <Text style={styles.name}>{userName}</Text>
        </View>

        {/* Most Recent Achievement Box */}
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Recent Achievement</Text>
          <Text style={styles.boxContent}>{mostRecentAchievement}</Text>
        </View>

        {/* Eating Habits & Score Box */}
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Eating Habits & Score</Text>
          <Text style={styles.boxContent}>Habits: {eatingHabits}</Text>
          <Text style={styles.boxContent}>Score: {currentScore}</Text>
        </View>

        {/* Food History Section */}
        <View style={styles.foodHistory}>
          <Text style={styles.sectionTitle}>Food History</Text>
          {foodHistory.map((item, index) => (
            <Text key={index} style={styles.foodItem}>
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    paddingHorizontal: 10,
    justifyContent: "center",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 10,
    top: 15,
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: "#007AFF",
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 60, // Vertically centers the title in the header
  },
  // Updated settings button style: moved further down by setting top: 40
  settingsButton: {
    position: "absolute",
    right: 20,
    top: 40,
    padding: 5,
  },
  settingsButtonText: {
    fontSize: 24,
    color: "#007AFF",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc", // Fallback color if the image fails to load
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "600",
  },
  box: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  boxContent: {
    fontSize: 16,
  },
  foodHistory: {
    width: "100%",
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  foodItem: {
    fontSize: 16,
    paddingVertical: 3,
  },
});
