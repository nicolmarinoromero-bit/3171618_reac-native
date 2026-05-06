import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ItemCard from '../components/ItemCard';
import { mockAudits } from '../data/mockData';
import { Audit } from '../types';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';

const HomeScreen: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  // Filtrado en tiempo real (useMemo)
  const filteredAudits = useMemo(() => {
    if (!searchText.trim()) return mockAudits;
    const lower = searchText.toLowerCase();
    return mockAudits.filter(
      (item) =>
        item.clientName.toLowerCase().includes(lower) ||
        item.industry.toLowerCase().includes(lower) ||
        item.auditor.toLowerCase().includes(lower) ||
        item.status.includes(lower)
    );
  }, [searchText]);

  // Acción al presionar una tarjeta (alerta con detalles)
  const handleCardPress = (item: Audit) => {
    Alert.alert(
      `Auditoría: ${item.clientName}`,
      `Cliente: ${item.clientName}\nIndustria: ${item.industry}\nAuditor: ${item.auditor}\nFecha: ${item.auditDate}\nHallazgos: ${item.findings}\nEstado: ${item.status === 'pending' ? 'Pendiente' : item.status === 'in_progress' ? 'En progreso' : 'Completada'}`,
      [{ text: 'OK' }]
    );
  };

  // useCallback para renderItem
  const renderItem = useCallback(
    ({ item }: { item: Audit }) => <ItemCard item={item} onPress={() => handleCardPress(item)} />,
    []
  );

  // Componente de lista vacía (memoizado)
  const EmptyList = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No se encontraron auditorías</Text>
        <Text style={styles.emptySubtext}>Intenta con otra búsqueda</Text>
      </View>
    ),
    []
  );

  // Separador entre tarjetas
  const ItemSeparator = useCallback(() => <View style={{ height: SPACING.sm }} />, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📋 Búsqueda de Auditorías</Text>
        <Text style={styles.headerSubtitle}>{filteredAudits.length} resultados</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por cliente, industria, auditor o estado..."
          placeholderTextColor={COLORS.placeholder}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={filteredAudits}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyList}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    borderBottomLeftRadius: SPACING.xl,
    borderBottomRightRadius: SPACING.xl,
  },
  headerTitle: {
    ...(TYPOGRAPHY.h1 as any),
    color: '#FFFFFF',
  },
  headerSubtitle: {
    ...(TYPOGRAPHY.body as any),
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: SPACING.xs,
  },
  searchContainer: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.background,
  },
  searchInput: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SPACING.md,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    ...(TYPOGRAPHY.body as any),
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  listContent: {
    paddingBottom: SPACING.xl,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: SPACING.xxl * 2,
  },
  emptyText: {
    ...(TYPOGRAPHY.h2 as any),
    color: COLORS.primary,
  },
  emptySubtext: {
    ...(TYPOGRAPHY.body as any),
    color: COLORS.textLight,
    marginTop: SPACING.sm,
  },
});

export default HomeScreen;