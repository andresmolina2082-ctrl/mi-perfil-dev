import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const SKILLS = ['TypeScript', 'React Native', 'Node.js'];

export default function App() {
  const [likes, setLikes] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.avatar} />

      <Text style={styles.name}>Andrés Molina</Text>
      <Text style={styles.role}>Estudiante de Ingeniería en Sistemas</Text>
      <Text style={styles.bio}>
        Apasionado por el desarrollo móvil y el aprendizaje continuo. Me
        encanta construir apps que resuelven problemas reales.
      </Text>

      <View style={styles.badgesContainer}>
        {SKILLS.map((skill) => (
          <View key={skill} style={styles.badge}>
            <Text style={styles.badgeText}>{skill}</Text>
          </View>
        ))}
      </View>

      <Pressable style={styles.likeButton} onPress={() => setLikes(likes + 1)}>
        <Text style={styles.likeButtonText}>👍 Like ({likes})</Text>
      </Pressable>

      <Text style={styles.hint}>Toca el botón para dar like</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  role: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  bio: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 20,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    gap: 8,
  },
  badge: {
    backgroundColor: '#4f46e5',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  likeButton: {
    marginTop: 28,
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  likeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hint: {
    marginTop: 8,
    fontSize: 12,
    color: '#888',
  },
});
