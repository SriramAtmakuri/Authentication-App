import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function HomeScreen() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Authentication</Text>
          <Text style={styles.subtitle}>Users</Text>
        </View>
        <View style={styles.userCard}>
          <Text style={styles.userEmail}>{auth.currentUser?.email}</Text>
          <Text style={styles.userDate}>Created: Apr 17, 2022</Text>
          <Text style={styles.userId}>User UID: {auth.currentUser?.uid?.substring(0, 20)}...</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userEmail: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  userDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  userId: {
    fontSize: 12,
    color: '#999',
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    padding: 15,
    margin: 20,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});