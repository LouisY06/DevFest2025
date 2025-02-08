import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 Welcome to NutriSwap!</Text>
      <Text style={styles.subtitle}>Scan food labels and get healthier alternatives.</Text>
      <Button title="Scan Food Label" onPress={() => router.push('/scan')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#666',
    textAlign: 'center',
  },
});
