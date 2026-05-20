import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';

export type HomeStackParamList = {
  HomeList: undefined;
  HomeDetail: { id: string; name: string };
};

export type RootTabParamList = {
  HomeTab: undefined;
  Saved: undefined;
};

export type HomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, 'HomeList'>,
  BottomTabScreenProps<RootTabParamList, 'HomeTab'>
>;

export type DetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'HomeDetail'>;

export type SavedScreenProps = BottomTabScreenProps<RootTabParamList, 'Saved'>;