import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  const router = useRouter();

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
    </View>
  );
}

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
  },
});