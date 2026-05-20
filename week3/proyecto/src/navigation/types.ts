import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

// Parámetros del Stack anidado en Home
export type HomeStackParamList = {
  HomeList: undefined;        // Lista de auditorías
  HomeDetail: { id: string; name: string };  // Recibimos id y nombre
};

// Parámetros del Tab Navigator
export type RootTabParamList = {
  HomeTab: undefined;         // Aquí va el Stack de Home
  Favorites: undefined;
};

// Tipos para cada pantalla (componente)
export type HomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, 'HomeList'>,
  BottomTabScreenProps<RootTabParamList, 'HomeTab'>
>;

export type DetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'HomeDetail'>;

export type FavoritesScreenProps = BottomTabScreenProps<RootTabParamList, 'Favorites'>;