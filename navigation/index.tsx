/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Image } from 'react-native';
import BagScreen from '../screens/BagScreen';
import HomeScreen from '../screens/HomeScreen';
import ModalScreen from '../screens/ModalScreen';
import MyPageScreen from '../screens/MyPageScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ProductScreen from '../screens/ProductScreen';
import SearchScreen from '../screens/SearchScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={() => ({
        headerShown: false,
        title: "고기팜"
      })}
    >
      <Stack.Screen name="Root" component={BootomTabNavigator}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BootomTab = createBottomTabNavigator<RootTabParamList>();

function BootomTabNavigator() {
  return(
    <BootomTab.Navigator
      screenOptions={({navigation}) => ({
        header: () => null,
        title: "고기팜"
      })}
      initialRouteName="Home"
    >
      <BootomTab.Group
        screenOptions={{
          
        }}
      >
        <BootomTab.Screen 
          options={{
            tabBarLabel: "카테고리"
          }}
          name="Category" component={ModalScreen}/>
      </BootomTab.Group>
      <BootomTab.Screen 
        options={{
          tabBarLabel: "검색"
        }}
        name="Search" component={SearchScreen}/>
      <BootomTab.Screen 
        options={{
          tabBarLabel: "홈"
        }}
        name="Home" component={PageNavigator}/>
      <BootomTab.Screen 
        options={{
          tabBarLabel: "장바구니"
        }}
        name="Bag" component={BagScreen}/>
      <BootomTab.Screen 
        options={{
          tabBarLabel: "마이 페이지"
        }}
        name="MyPage" component={MyPageScreen}/>
    </BootomTab.Navigator>
  )
}

const Page = createNativeStackNavigator();

function PageNavigator({navigation}) {
  return(
    <Page.Navigator
      screenOptions={{
        header: () => null,
        title: "고기팜"
      }}
      initialRouteName="Main"
    >
      <Page.Screen 
        name="Main" component={HomeScreen}></Page.Screen>
      <Page.Screen name="Product" component={ProductScreen}></Page.Screen>
    </Page.Navigator>
  )
}