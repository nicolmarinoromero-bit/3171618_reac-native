import React from 'react';
import { View, Text, FlatList, Image, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';
import { mockAudits } from '../data/mockData';
import { Audit } from '../types';
import { COLORS, SPACING, SHADOW } from '../theme';

type HomeScreenNavProp = NativeStackNavigationProp<HomeStackParamList, 'HomeList'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavProp>();

  const handlePress = (item: Audit) => {
    navigation.navigate('HomeDetail', { id: item.id, name: item.clientName });
  };

  const getStatusColor = (status: Audit['status']) => {
    switch (status) {
      case 'pending': return COLORS.pending;
      case 'in_progress': return COLORS.inProgress;
      case 'completed': return COLORS.completed;
      default: return COLORS.textLight;
    }
  };
  const getStatusText = (status: Audit['status']) => {
    switch (status) {
      case 'pending': return 'Pendiente';
      case 'in_progress': return 'En progreso';
      case 'completed': return 'Completada';
      default: return '';
    }
  };

  const renderItem = ({ item }: { item: Audit }) => (
    <Pressable onPress={() => handlePress(item)} style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.clientName}>{item.clientName}</Text>
        <Text style={styles.industry}>{item.industry}</Text>
        <Text style={styles.detail}>Auditor: {item.auditor}</Text>
        <Text style={styles.detail}>Fecha: {item.auditDate}</Text>
        <Text style={styles.detail}>Hallazgos: {item.findings}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{getStatusText(item.status)}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={mockAudits} keyExtractor={(item) => item.id} renderItem={renderItem} contentContainerStyle={styles.list} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  list: { paddingVertical: SPACING.md },
  card: { flexDirection: 'row', backgroundColor: COLORS.cardBg, borderRadius: SPACING.md, marginHorizontal: SPACING.lg, marginVertical: SPACING.sm, padding: SPACING.md, ...SHADOW },
  cardPressed: { transform: [{ scale: 0.98 }], backgroundColor: '#E0E0E0' },
  image: { width: 80, height: 80, borderRadius: 40, marginRight: SPACING.md },
  content: { flex: 1 },
  clientName: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary, marginBottom: SPACING.xs },
  industry: { fontSize: 14, color: COLORS.textLight, fontStyle: 'italic', marginBottom: SPACING.sm },
  detail: { fontSize: 14, color: COLORS.text, marginBottom: SPACING.xs },
  statusBadge: { alignSelf: 'flex-start', paddingHorizontal: SPACING.sm, paddingVertical: SPACING.xs, borderRadius: SPACING.sm, marginTop: SPACING.xs },
  statusText: { fontSize: 12, color: '#FFF', fontWeight: 'bold' },
});

export default HomeScreen;