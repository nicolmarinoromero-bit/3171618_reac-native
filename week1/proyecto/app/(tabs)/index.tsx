import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AuditCard from '../../components/AuditCard';
import { mockAudits } from '../../constants/mockData';
import { Audit } from '../../types';

export default function HomeScreen() {
  const [audits, setAudits] = useState<Audit[]>(mockAudits);

  const handleCardPress = (audit: Audit) => {
    Alert.alert(
      `Auditoría: ${audit.clientName}`,
      `Cliente: ${audit.clientName}\nIndustria: ${audit.clientIndustry}\nAuditor: ${audit.auditorName}\nFecha: ${audit.auditDate}\nHallazgos: ${audit.findingsCount}\nEstado: ${audit.status === 'pending' ? 'Pendiente' : audit.status === 'in_progress' ? 'En progreso' : 'Completada'}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📋 Auditoría App</Text>
        <Text style={styles.headerSubtitle}>Gestión de auditorías</Text>
      </View>
      <FlatList
        data={audits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AuditCard audit={item} onPress={() => handleCardPress(item)} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#2C3E50',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#BDC3C7',
    marginTop: 4,
  },
  listContent: {
    paddingVertical: 12,
  },
});