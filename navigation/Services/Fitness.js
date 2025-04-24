import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const gyms = [
  'Shapes Gym',
  'IronBox Gym',
  'Platinum Fitness',
  'Velocity Health & Fitness',
  'Xtreme Fitness',
  'Structure Health & Fitness',
  'Fitnastic Gym',
  'Body Tone Gym',
  'Gold’s Gym',
];

const GymSection = () => (
  <View style={styles.sectionContainer}>
    {gyms.map((gym, index) => (
      <TouchableOpacity key={index} style={styles.card}>
        <Text style={styles.itemText}>{gym}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const Fitness = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>🏋️‍♂️ Fitness Centers in Lahore</Text>
        <GymSection />
      </ScrollView>
    </View>
  );
};

export default Fitness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  sectionContainer: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
