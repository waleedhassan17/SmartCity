import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const airlines = [
  { id: '1', name: 'Pakistan International Airlines (PIA)' },
  { id: '2', name: 'Emirates' },
  { id: '3', name: 'Qatar Airways' },
  { id: '4', name: 'Turkish Airlines' },
  { id: '5', name: 'Airblue' },
];

const flights = [
  { id: '1', airline: 'PIA', flightNo: 'PK302', time: '10:00 AM', status: 'On Time' },
  { id: '2', airline: 'Emirates', flightNo: 'EK611', time: '2:30 PM', status: 'Delayed' },
  { id: '3', airline: 'Qatar Airways', flightNo: 'QR632', time: '6:00 PM', status: 'On Time' },
];

const services = [
  { id: '1', name: 'Baggage Handling', description: 'Safe and secure baggage management' },
  { id: '2', name: 'Airport Lounge', description: 'Relax before your flight' },
  { id: '3', name: 'Transport Service', description: 'Get to and from the airport easily' },
];

const Airport = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>✈️ Airport Services</Text>

      {/* Flight Booking Section */}
      <Text style={styles.sectionTitle}>Book a Flight</Text>
      <FlatList
        data={airlines}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Flight Schedule Section */}
      <Text style={styles.sectionTitle}>Flight Schedule</Text>
      <FlatList
        data={flights}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.scheduleItem, item.status === 'Delayed' ? styles.delayed : styles.onTime]}>
            <Text style={styles.flightText}>{item.airline} - {item.flightNo}</Text>
            <Text style={styles.flightDetails}>{item.time}</Text>
            <Text style={[styles.flightStatus, item.status === 'Delayed' ? styles.statusDelayed : styles.statusOnTime]}>
              {item.status}
            </Text>
          </View>
        )}
      />

      {/* Airport Services Section */}
      <Text style={styles.sectionTitle}>Additional Services</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>{item.name}</Text>
            <Text style={styles.serviceDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Airport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f3',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#444',
  },
  bookButton: {
    backgroundColor: '#007AFF',
    width: '45%',
    padding: 15,
    margin: '2.5%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  scheduleItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    alignItems: 'center',
  },
  flightText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  flightDetails: {
    fontSize: 14,
    color: '#666',
  },
  flightStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    padding: 5,
    borderRadius: 5,
  },
  statusOnTime: {
    color: '#0f9d58',
    backgroundColor: '#d4edda',
  },
  statusDelayed: {
    color: '#d9534f',
    backgroundColor: '#f8d7da',
  },
  serviceCard: {
    backgroundColor: '#007AFF',
    width: '45%',
    padding: 15,
    borderRadius: 12,
    margin: '2.5%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
});
