import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function ResultsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const uri = Array.isArray(params.uri) ? params.uri[0] : params.uri; // Ensure it's a string

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>
      {uri && <Image source={{ uri }} style={styles.image} />}
      <Text style={styles.info}>Processing image... (AI Analysis coming soon!)</Text>
      <Button title="Scan Again" onPress={() => router.push('/scan')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 400,
    marginVertical: 20,
  },
  info: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
