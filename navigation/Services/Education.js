import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const tutors = [
  { id: '1', name: 'Ali Khan - Math & Physics' },
  { id: '2', name: 'Ayesha Ahmed - English & IELTS' },
  { id: '3', name: 'Zain Malik - Computer Science' },
];

const academies = [
  { id: '1', name: 'Udemy' },
  { id: '2', name: 'Coursera' },
  { id: '3', name: 'Khan Academy' },
];

const universities = [
  { id: '1', name: 'LUMS' },
  { id: '2', name: 'UET Lahore' },
  { id: '3', name: 'Punjab University' },
];

const colleges = [
  { id: '1', name: 'Government College Lahore' },
  { id: '2', name: 'Forman Christian College' },
];

const schools = [
  { id: '1', name: 'Beaconhouse School System' },
  { id: '2', name: 'The City School' },
];

const renderList = (title, data) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      nestedScrollEnabled={true} // ✅ Fix for FlatList inside ScrollView
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>Powered by SmartCity Services</Text>
  </View>
);

const Education = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Education Services</Text>
        {renderList('Find a Home Tutor', tutors)}
        {renderList('Online Academies', academies)}
        {renderList('Universities', universities)}
        {renderList('Colleges', colleges)}
        {renderList('Schools', schools)}
      </ScrollView>
      <Footer /> {/* ✅ Footer placed outside ScrollView to keep it fixed */}
    </View>
  );
};

export default Education;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
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
  footer: {
    backgroundColor: '#333',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
