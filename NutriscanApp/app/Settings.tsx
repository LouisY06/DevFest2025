// Settings.tsx

import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type Allergy = {
  id: string;
  name: string;
};

// Sample current allergies (the ones already selected)
const currentAllergies: Allergy[] = [
  { id: '1', name: 'Peanuts' },
  { id: '2', name: 'Shellfish' },
  { id: '3', name: 'Gluten' },
];

const Settings: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Link href="/home" style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Link>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Allergies Section */}
        <Text style={styles.sectionTitle}>My Allergies</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.allergiesContainer}
        >
          {currentAllergies.map((allergy) => (
            <View key={allergy.id} style={styles.currentAllergyBox}>
              <Ionicons name="warning" size={32} color="#FFA500" />
              <Text style={styles.allergyText}>{allergy.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* "Add More Allergies" - One big box */}
        <TouchableOpacity style={styles.addAllergyBox}>
          <Text style={styles.addAllergyText}>Add More Allergies</Text>
        </TouchableOpacity>

        {/* Other settings options */}
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Change Profile Picture</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Account Settings</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Notifications</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>Privacy</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>About</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    paddingHorizontal: 10,
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 15,
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: '#007AFF',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 60,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#222',
  },
  // Allergies Section
  allergiesContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  currentAllergyBox: {
    width: 140,
    height: 140,
    marginRight: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allergyText: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
  // "Add More Allergies" box (one big box)
  addAllergyBox: {
    width: '95%',
    height: 120,
    marginVertical: 20,
    backgroundColor: '#d0d0d0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  addAllergyText: {
    fontSize: 18,
    color: '#555',
    fontWeight: 'bold',
  },
  // Settings options
  settingItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  settingTitle: {
    fontSize: 18,
  },
});
