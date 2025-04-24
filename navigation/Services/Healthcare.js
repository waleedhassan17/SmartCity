import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const hospitals = [
  { id: '1', name: 'Shaukat Khanum Hospital', location: 'Johar Town, Lahore' },
  { id: '2', name: 'Mayo Hospital', location: 'Anarkali, Lahore' },
  { id: '3', name: 'Jinnah Hospital', location: 'Faisal Town, Lahore' },
  { id: '4', name: 'Doctors Hospital', location: 'Canal Road, Lahore' },
  { id: '5', name: 'Punjab Institute of Cardiology', location: 'Jail Road, Lahore' },
];

const Healthcare = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Healthcare Services</Text>

      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.hospitalName}>{item.name}</Text>
            <Text style={styles.hospitalLocation}>{item.location}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Healthcare;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  hospitalLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
