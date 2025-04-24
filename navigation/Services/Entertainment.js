import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const cinemas = [
  { id: '1', name: 'Cinepax Lahore' },
  { id: '2', name: 'Super Cinema' },
  { id: '3', name: 'Cue Cinemas' },
  { id: '4', name: 'Universal Cinemas' },
  { id: '5', name: 'Cine Gold Plex' },
];

const renderCinemaList = () => (
  <View style={styles.listContainer}>
    <Text style={styles.sectionTitle}>Cinemas in Lahore</Text>
    <FlatList
      data={cinemas}
      keyExtractor={(item) => item.id}
      nestedScrollEnabled={true}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const Entertainment = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Entertainment Services</Text>
        {renderCinemaList()}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by SmartCity Services</Text>
      </View>
    </View>
  );
};

export default Entertainment;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the footer is at the bottom
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
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
    marginBottom: 10,
    color: '#444',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  footer: {
    padding: 15,
    backgroundColor: '#333',
    alignItems: 'center',
    borderRadius: 10,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
