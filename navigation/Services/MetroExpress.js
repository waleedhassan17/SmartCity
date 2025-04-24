import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const services = [
  { id: '1', name: 'Same City Delivery', description: 'Fast delivery within your city' },
  { id: '2', name: 'Intercity Delivery', description: 'Reliable shipping to other cities' },
  { id: '3', name: 'Express Delivery', description: 'Super fast priority delivery' },
  { id: '4', name: 'Parcel Tracking', description: 'Track your parcel in real-time' }, 
];

const MetroExpress = () => {
  const handleBookService = () => {
    console.log('Book Service button clicked!');
    // Navigate to booking page or show booking modal here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MetroExpress Courier Services</Text>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.serviceSection}>
            <Text style={styles.serviceTitle}>{item.name}</Text>
            <Text style={styles.serviceDescription}>{item.description}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />

      {/* Book Service Button */}
      <TouchableOpacity style={styles.button} onPress={handleBookService}>
        <Text style={styles.buttonText}>Book Service</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MetroExpress;

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
  listContainer: {
    justifyContent: 'center',
  },
  serviceSection: {
    backgroundColor: '#fff',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    margin: '2.5%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ff5733', // Vibrant color for CTA button
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
