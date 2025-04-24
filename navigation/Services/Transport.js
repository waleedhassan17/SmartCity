import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const transportCompanies = [
  { id: '1', name: 'Faisal Movers' },
  { id: '2', name: 'Devo' },
  { id: '3', name: 'Sania Express' },
  { id: '4', name: 'Skyways' },
  { id: '5', name: 'Daewoo Express' },
];

const schedules = [
  { id: '1', company: 'Faisal Movers', route: 'Lahore - Islamabad', time: '08:00 AM', status: 'On Time' },
  { id: '2', company: 'Devo', route: 'Karachi - Lahore', time: '12:00 PM', status: 'Delayed' },
  { id: '3', company: 'Sania Express', route: 'Faisalabad - Multan', time: '4:00 PM', status: 'On Time' },
];

const services = [
  { id: '1', name: 'Luxury Buses', description: 'Comfortable and spacious seating' },
  { id: '2', name: 'Online Booking', description: 'Easily book tickets from anywhere' },
  { id: '3', name: 'Parcel Service', description: 'Send parcels across cities' },
];

const Transport = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transport Service</Text>

      {/* Booking Section */}
      <Text style={styles.sectionTitle}>Book a Bus</Text>
      <FlatList
        data={transportCompanies}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Bus Schedule Section */}
      <Text style={styles.sectionTitle}>Bus Schedules</Text>
      <FlatList
        data={schedules}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleText}>{item.company} - {item.route}</Text>
            <Text style={styles.scheduleDetails}>{item.time} | {item.status}</Text>
          </View>
        )}
      />

      {/* Transport Services Section */}
      <Text style={styles.sectionTitle}>Transport Services</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>{item.name}</Text>
            <Text style={styles.serviceDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Transport;

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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#444',
  },
  item: {
    backgroundColor: '#fff',
    width: '45%',
    padding: 15,
    margin: '2.5%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  scheduleItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  scheduleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  scheduleDetails: {
    fontSize: 14,
    color: '#666',
  },
  serviceCard: {
    backgroundColor: '#fff',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    margin: '2.5%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
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
});
