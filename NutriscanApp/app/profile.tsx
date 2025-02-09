import { Link, useRouter } from 'expo-router';

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Profile() {
  const router = useRouter();

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
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.headerTitle}>Personal</Text>

      {/* My Stats Section */}
      <View style={styles.statsCard}>
        <View style={styles.profileRow}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.username}>Koopa Troopa</Text>
            <Text style={styles.userDetails}>NutriScan lover since 2025</Text>
            <Text style={styles.userDetails}>Omnivore, male</Text>
            <Text style={styles.userDOB}>DOB: 2005/02/02</Text>
          </View>
        </View>

        {/* Nutrition Icons */}
        <View style={styles.nutritionRow}>
          <Image source={require('../assets/images/water.png')} style={styles.icon} />
          <Image source={require('../assets/images/water.png')} style={styles.icon} />
          <Image source={require('../assets/images/water.png')} style={styles.icon} />
        </View>
      </View>

      {/* New Achievements Section */}
      <Text style={styles.sectionTitle}>New Achievements</Text>

      <View style={styles.achievementsCard}>
        <View style={styles.achievementRow}>
          <Image source={require('../assets/images/water.png')} style={styles.achievementIcon} />
          <Text style={styles.achievementText}>
            <Text style={styles.boldText}>You and Louis</Text> completed a week-long shared health streak together!{'\n'}
            <Text style={styles.dateText}>September 07, 2024</Text>
          </Text>
        </View>

        <View style={styles.achievementRow}>
          <Image source={require('../assets/images/water.png')} style={styles.achievementIcon} />
          <Text style={styles.achievementText}>
            <Text style={styles.boldText}>You and David</Text> completed a year-long shared health streak together!{'\n'}
            <Text style={styles.dateText}>August, 2024</Text>
          </Text>
        </View>

        <View style={styles.achievementRow}>
          <Image source={require('../assets/images/water.png')} style={styles.achievementIcon} />
          <Text style={styles.achievementText}>
            <Text style={styles.boldText}>You</Text> completed your 10th badge!{'\n'}
            <Text style={styles.dateText}>August, 2024</Text>
          </Text>
        </View>
      </View>
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
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4A4A4A',
  },
  statsCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginTop: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  userDetails: {
    fontSize: 14,
    color: '#666',
  },
  userDOB: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 5,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#222',
  },
  achievementsCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  achievementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  achievementText: {
    flex: 1,
    fontSize: 14,
    color: '#444',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#222',
  },
  dateText: {
    fontSize: 12,
    color: '#777',
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