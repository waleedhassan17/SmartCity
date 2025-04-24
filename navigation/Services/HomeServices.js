import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity 
} from 'react-native';

const services = {
  Plumbers: ['Ali Plumbing Services', 'Fix It Plumbers', 'Rapid Flow Plumbing'],
  Electricians: ['Bright Spark Electricians', 'Home Fix Electric', 'Elite Electric Services'],
  Carpenters: ['WoodCraft Experts', 'Master Carpenters', 'Fine Finish Carpentry'],
};

const ServiceSection = ({ title, items }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {items.map((service, index) => (
      <TouchableOpacity key={index} style={styles.card}>
        <Text style={styles.itemText}>{service}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const RegisterSection = ({ title }) => (
  <View style={styles.registrationContainer}>
    <Text style={styles.registrationTitle}>🛠️ Register as {title}</Text>
    <TouchableOpacity style={styles.registerButton}>
      <Text style={styles.registerButtonText}>Register Now</Text>
    </TouchableOpacity>
  </View>
);

const HomeServices = () => {
  const [search, setSearch] = useState('');

  const filteredServices = Object.keys(services).reduce((acc, category) => {
    acc[category] = services[category].filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏠 Home Services</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="🔍 Search for services..."
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {Object.keys(filteredServices).map(category => (
          <ServiceSection key={category} title={category} items={filteredServices[category]} />
        ))}

        {/* Registration Sections for Plumbers, Electricians, and Carpenters */}
        {Object.keys(services).map(category => (
          <RegisterSection key={category} title={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeServices;

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
  searchBar: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    elevation: 3,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  sectionContainer: {
    marginBottom: 20,
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
  registrationContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  registrationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  registerButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
