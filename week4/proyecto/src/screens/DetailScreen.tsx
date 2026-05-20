import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';
import { mockAudits } from '../data/mockData';
import { COLORS, SPACING } from '../theme';
import { useSavedStore } from '../stores/savedStore';
import { Ionicons } from '@expo/vector-icons';

type DetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'HomeDetail'>;

const DetailScreen: React.FC = () => {
  const route = useRoute<DetailScreenProps['route']>();
  const { id } = route.params;
  const audit = mockAudits.find((item) => item.id === id);
  const { addSavedItem, removeSavedItem, isSaved } = useSavedStore();

  if (!audit) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Auditoría no encontrada</Text>
      </View>
    );
  }

  const isItemSaved = isSaved(audit.id);

  const toggleSave = () => {
    if (isItemSaved) {
      removeSavedItem(audit.id);
    } else {
      addSavedItem(audit);
    }
  };

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
        <Pressable onPress={toggleSave} style={styles.saveButton}>
          <Ionicons name={isItemSaved ? 'heart' : 'heart-outline'} size={28} color={isItemSaved ? '#e91e63' : COLORS.primary} />
          <Text style={styles.saveButtonText}>{isItemSaved ? 'Quitar de guardados' : 'Guardar auditoría'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  image: { width: '100%', height: 300, marginBottom: SPACING.lg },
  infoContainer: { padding: SPACING.lg },
  clientName: { fontSize: 28, fontWeight: 'bold', color: COLORS.primary, marginBottom: SPACING.xs },
  industry: { fontSize: 16, color: COLORS.textLight, fontStyle: 'italic', marginBottom: SPACING.md },
  detail: { fontSize: 16, color: COLORS.text, marginBottom: SPACING.xs },
  statusBadge: { alignSelf: 'flex-start', paddingHorizontal: SPACING.sm, paddingVertical: SPACING.xs, borderRadius: SPACING.sm, marginTop: SPACING.md, marginBottom: SPACING.lg },
  statusText: { fontSize: 12, color: '#FFF', fontWeight: 'bold' },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.cardBg,
    padding: SPACING.md,
    borderRadius: SPACING.md,
    marginTop: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  saveButtonText: { fontSize: 16, fontWeight: 'bold', color: COLORS.primary, marginLeft: SPACING.sm },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { fontSize: 18, color: COLORS.textLight },
});

export default DetailScreen;