import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Audit } from '../types';

interface AuditCardProps {
  audit: Audit;
  onPress: () => void;
}

const AuditCard: React.FC<AuditCardProps> = ({ audit, onPress }) => {
  const getStatusColor = () => {
    switch (audit.status) {
      case 'pending': return '#FF9800';
      case 'in_progress': return '#2196F3';
      case 'completed': return '#4CAF50';
      default: return '#9E9E9E';
    }
  };

  const getStatusText = () => {
    switch (audit.status) {
      case 'pending': return 'Pendiente';
      case 'in_progress': return 'En progreso';
      case 'completed': return 'Completada';
      default: return 'Desconocido';
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <Image source={{ uri: audit.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.clientName}>{audit.clientName}</Text>
        <Text style={styles.industry}>{audit.clientIndustry}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Auditor:</Text>
          <Text style={styles.value}>{audit.auditorName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Fecha:</Text>
          <Text style={styles.value}>{audit.auditDate}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Hallazgos:</Text>
          <Text style={styles.findingsCount}>{audit.findingsCount}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>{getStatusText()}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: '#E0E0E0',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  clientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 2,
  },
  industry: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34495E',
    width: 70,
  },
  value: {
    fontSize: 14,
    color: '#2C3E50',
    flex: 1,
  },
  findingsCount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E74C3C',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 6,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default AuditCard;