import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';
import { mockAudits } from '../data/mockData';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';

type DetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'HomeDetail'>;

const DetailScreen: React.FC = () => {
  const route = useRoute<DetailScreenProps['route']>();
  const { id, name } = route.params;
  const audit = mockAudits.find((item) => item.id === id);

  if (!audit) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Auditoría no encontrada</Text>
      </View>
    );
  }

  const getStatusColor = () => {
    switch (audit.status) {
      case 'pending': return COLORS.pending;
      case 'in_progress': return COLORS.inProgress;
      case 'completed': return COLORS.completed;
      default: return COLORS.textLight;
    }
  };
  const getStatusText = () => {
    switch (audit.status) {
      case 'pending': return 'Pendiente';
      case 'in_progress': return 'En progreso';
      case 'completed': return 'Completada';
      default: return '';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: audit.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.clientName}>{audit.clientName}</Text>
        <Text style={styles.industry}>{audit.industry}</Text>
        <Text style={styles.detail}>Auditor: {audit.auditor}</Text>
        <Text style={styles.detail}>Fecha: {audit.auditDate}</Text>
        <Text style={styles.detail}>Hallazgos: {audit.findings}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>{getStatusText()}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  image: { width: '100%', height: 300, marginBottom: SPACING.lg },
  infoContainer: { padding: SPACING.lg },
  clientName: { ...(TYPOGRAPHY.h1 as any), color: COLORS.primary, marginBottom: SPACING.xs },
  industry: { ...(TYPOGRAPHY.body as any), color: COLORS.textLight, fontStyle: 'italic', marginBottom: SPACING.md },
  detail: { ...(TYPOGRAPHY.body as any), color: COLORS.text, marginBottom: SPACING.xs },
  statusBadge: { alignSelf: 'flex-start', paddingHorizontal: SPACING.sm, paddingVertical: SPACING.xs, borderRadius: SPACING.sm, marginTop: SPACING.md },
  statusText: { ...(TYPOGRAPHY.small as any), color: '#FFF', fontWeight: 'bold' },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { fontSize: 18, color: COLORS.textLight },
});

export default DetailScreen;