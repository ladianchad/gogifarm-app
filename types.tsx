/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  CategoryModal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type InitalRoute = {
  initalRoute: string | undefined;
};

export type RootScreenLinkingList = {
  Root: NavigatorScreenParams<RootTabLinkingList> | undefined;
  Modal: undefined;
  CategoryModal: undefined;
  NotFound: undefined;
}

export type RootTabLinkingList = {
  HomeTab: NavigatorScreenParams<HomeTabLinkingList> | undefined;
  CategoryTab: undefined;
  SearchTab: undefined;
  BagTab: undefined;
  MyPageTab: undefined;
}

export type HomeTabLinkingList = {
  Main: undefined;
  Item: undefined;
  Login: undefined;
}

export type RootTabParamList = {
  HomeTab: undefined;
  CategoryTab: undefined;
  SearchTab: InitalRoute | undefined;
  BagTab: InitalRoute | undefined;
  MyPageTab: InitalRoute | undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type PageParamList = {
  Home: undefined;
  Category: undefined;
  Search: undefined;
  Bag: undefined;
  MyPage: undefined;
  Product: undefined;
}
