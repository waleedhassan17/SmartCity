import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const AdminScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>

      {/* User Management */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('UserManagement')}>
        <Ionicons name="people" size={40} color="#007bff" />
        <Text style={styles.cardText}>Manage Users</Text>
      </TouchableOpacity>

      {/* Content Management */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ContentManagement')}>
        <MaterialIcons name="edit" size={40} color="#28a745" />
        <Text style={styles.cardText}>Manage Content</Text>
      </TouchableOpacity>

      {/* Analytics & Reports */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Reports')}>
        <FontAwesome5 name="chart-line" size={40} color="#ff6600" />
        <Text style={styles.cardText}>Analytics & Reports</Text>
      </TouchableOpacity>

      {/* Notifications */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Notifications')}>
        <Ionicons name="notifications" size={40} color="#ffcc00" />
        <Text style={styles.cardText}>Notifications</Text>
      </TouchableOpacity>

      {/* Settings */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings" size={40} color="#6c757d" />
        <Text style={styles.cardText}>Settings</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Login')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
