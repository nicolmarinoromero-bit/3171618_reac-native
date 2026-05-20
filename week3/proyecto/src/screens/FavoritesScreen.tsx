import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Audit } from '../types';
import { COLORS, SPACING, SHADOW } from '../theme';

const favoriteAudits: Audit[] = [
  { id: 'fav1', clientName: 'TechSolutions SAS', industry: 'Tecnología', auditor: 'María González', auditDate: '2024-06-15', status: 'in_progress', findings: 12, imageUrl: 'https://picsum.photos/id/0/200/200' },
  { id: 'fav2', clientName: 'Salud Total EPS', industry: 'Salud', auditor: 'Carlos Rodríguez', auditDate: '2024-06-10', status: 'completed', findings: 5, imageUrl: 'https://picsum.photos/id/20/200/200' },
  { id: 'fav3', clientName: 'Construcciones Andinas', industry: 'Construcción', auditor: 'Ana Martínez', auditDate: '2024-06-20', status: 'pending', findings: 0, imageUrl: 'https://picsum.photos/id/1/200/200' },
];

const FavoritesScreen: React.FC = () => {
  const renderItem = ({ item }: { item: Audit }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.clientName}>{item.clientName}</Text>
        <Text style={styles.industry}>{item.industry}</Text>
        <Text style={styles.detail}>Auditor: {item.auditor}</Text>
        <Text style={styles.detail}>Fecha: {item.auditDate}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={favoriteAudits} keyExtractor={(item) => item.id} renderItem={renderItem} contentContainerStyle={styles.list} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  list: { paddingVertical: SPACING.md },
  card: { flexDirection: 'row', backgroundColor: COLORS.cardBg, borderRadius: SPACING.md, marginHorizontal: SPACING.lg, marginVertical: SPACING.sm, padding: SPACING.md, ...SHADOW },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: SPACING.md },
  content: { flex: 1 },
  clientName: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary, marginBottom: SPACING.xs },
  industry: { fontSize: 14, color: COLORS.textLight, fontStyle: 'italic' },
  detail: { fontSize: 14, color: COLORS.text, marginTop: SPACING.xs },
});

export default FavoritesScreen;