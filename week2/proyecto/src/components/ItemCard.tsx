import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Audit } from '../types';
import { COLORS, TYPOGRAPHY, SPACING, SHADOW } from '../theme';

interface ItemCardProps {
  item: Audit;
  onPress: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onPress }) => {
  const getStatusColor = () => {
    switch (item.status) {
      case 'pending': return COLORS.pending;
      case 'in_progress': return COLORS.inProgress;
      case 'completed': return COLORS.completed;
      default: return COLORS.textLight;
    }
  };

  const getStatusText = () => {
    switch (item.status) {
      case 'pending': return 'Pendiente';
      case 'in_progress': return 'En progreso';
      case 'completed': return 'Completada';
      default: return '';
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
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.clientName}>{item.clientName}</Text>
        <Text style={styles.industry}>{item.industry}</Text>
        <Text style={styles.detail}>Auditor: {item.auditor}</Text>
        <Text style={styles.detail}>Fecha: {item.auditDate}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Hallazgos:</Text>
          <Text style={styles.findings}>{item.findings}</Text>
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
    backgroundColor: COLORS.cardBg,
    borderRadius: SPACING.md,
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.sm,
    padding: SPACING.md,
    ...SHADOW,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: '#E0E0E0',   // mismo efecto que semana 1
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: SPACING.md,
  },
  content: {
    flex: 1,
  },
  clientName: {
    ...(TYPOGRAPHY.h2 as any),
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  industry: {
    ...(TYPOGRAPHY.caption as any),
    color: COLORS.textLight,
    fontStyle: 'italic',
    marginBottom: SPACING.sm,
  },
  detail: {
    ...(TYPOGRAPHY.caption as any),
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  label: {
    ...(TYPOGRAPHY.caption as any),
    fontWeight: 'bold',
    color: COLORS.primary,
    marginRight: SPACING.sm,
  },
  findings: {
    ...(TYPOGRAPHY.caption as any),
    fontWeight: 'bold',
    color: COLORS.completed,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: SPACING.sm,
    marginTop: SPACING.xs,
  },
  statusText: {
    ...(TYPOGRAPHY.small as any),
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ItemCard;