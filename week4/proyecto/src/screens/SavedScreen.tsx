import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/types';
import { useSavedStore } from '../stores/savedStore';
import { Audit } from '../types';
import { COLORS, SPACING, SHADOW } from '../theme';
import { Ionicons } from '@expo/vector-icons';

type SavedScreenNavProp = NativeStackNavigationProp<HomeStackParamList, 'HomeList'>;

const SavedScreen: React.FC = () => {
  const navigation = useNavigation<SavedScreenNavProp>();
  const { savedItems, removeSavedItem } = useSavedStore();

  const handlePress = (item: Audit) => {
    navigation.navigate('HomeDetail', { id: item.id, name: item.clientName });
  };

  const renderItem = ({ item }: { item: Audit }) => (
    <View style={styles.cardWrapper}>
      <Pressable onPress={() => handlePress(item)} style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.clientName}>{item.clientName}</Text>
          <Text style={styles.industry}>{item.industry}</Text>
          <Text style={styles.detail}>Auditor: {item.auditor}</Text>
          <Text style={styles.detail}>Fecha: {item.auditDate}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => removeSavedItem(item.id)} style={styles.removeButton}>
        <Ionicons name="trash-outline" size={24} color="#e74c3c" />
      </Pressable>
    </View>
  );

  if (savedItems.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No tienes auditorías guardadas</Text>
          <Text style={styles.emptySubtext}>Presiona el corazón ❤️ en cualquier auditoría para agregarla</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={savedItems} keyExtractor={(item) => item.id} renderItem={renderItem} contentContainerStyle={styles.list} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  list: { paddingVertical: SPACING.md },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.sm,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.cardBg,
    borderRadius: SPACING.md,
    padding: SPACING.md,
    ...SHADOW,
  },
  cardPressed: { transform: [{ scale: 0.98 }], backgroundColor: '#E0E0E0' },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: SPACING.md },
  content: { flex: 1 },
  clientName: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary, marginBottom: SPACING.xs },
  industry: { fontSize: 14, color: COLORS.textLight, fontStyle: 'italic', marginBottom: SPACING.sm },
  detail: { fontSize: 14, color: COLORS.text, marginBottom: SPACING.xs },
  removeButton: { marginLeft: SPACING.sm, padding: SPACING.sm },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: SPACING.xl },
  emptyText: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary, textAlign: 'center' },
  emptySubtext: { fontSize: 14, color: COLORS.textLight, textAlign: 'center', marginTop: SPACING.md },
});

export default SavedScreen;