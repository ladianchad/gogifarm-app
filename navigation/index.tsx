/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import BagScreen from '../screens/BagScreen';
import CategoryModalScreen from '../screens/CategoryModalScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LogInScreen';
import ModalScreen from '../screens/ModalScreen';
import MyPageScreen from '../screens/MyPageScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ProductScreen from '../screens/ProductScreen';
import SearchScreen from '../screens/SearchScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
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
        title: "고기팜",
      })}
    >
      <Stack.Screen name="Root" component={BootomTabNavigator}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'containedTransparentModal', animation: 'none' }}>
        <Stack.Screen name="CategoryModal" component={CategoryModalScreen}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BootomTab = createBottomTabNavigator<RootTabParamList>();
const NullScreen = () => null;

function BootomTabNavigator() {
  return(
    <BootomTab.Navigator
      screenOptions={({navigation}) => ({
        header: () => null,
        title: "고기팜"
      })}
      initialRouteName="HomeTab"
    >
      <BootomTab.Group>
        <BootomTab.Screen 
          options={{
            tabBarLabel: "카테고리",
          }}
          name="CategoryTab" 
          component={NullScreen}
          listeners={
            ({navigation}) => ({
              tabPress: event => {
                event.preventDefault();
                navigation.navigate("CategoryModal")
              }
            })}
          />
      </BootomTab.Group>
      <BootomTab.Screen 
        options={{
          tabBarLabel: "검색"
        }}
        initialParams={{
          initalRoute: "Search"
        }}
        name="SearchTab" component={PageNavigator}/>
      <BootomTab.Screen 
        options={{
          tabBarLabel: "홈",
        }}
        listeners={
          ({navigation}) => ({
            tabPress: event => {
              event.preventDefault();
              navigation.navigate("Main")
            }
          })}
        name="HomeTab" component={PageNavigator}/>
      <BootomTab.Screen 
        options={{
          tabBarLabel: "장바구니",
        }}
        initialParams={{
          initalRoute: "Bag"
        }}
        name="BagTab" component={PageNavigator}/>
      <BootomTab.Screen 
        options={{
          tabBarLabel: "마이 페이지",
        }}
        initialParams={{
          initalRoute: "MyPage"
        }}
        name="MyPageTab" component={PageNavigator}/>
    </BootomTab.Navigator>
  )
}

const Page = createNativeStackNavigator();

function PageNavigator({route}) {
  const {initalRoute} = route.params || {initalRoute: "Main"};
  return(
    <Page.Navigator
      screenOptions={{
        header: () => null,
        title: "고기팜"
      }}
      initialRouteName={initalRoute || "Main"}
    >
      <Page.Screen name="Main" component={HomeScreen}></Page.Screen>
      <Page.Screen name="Product" component={ProductScreen}></Page.Screen>
      <Page.Screen name="Search" component={SearchScreen}></Page.Screen>
      <Page.Screen name="Bag" component={BagScreen}></Page.Screen>
      <Page.Screen name="MyPage" component={MyPageScreen}></Page.Screen>
      <Page.Screen name="Login" component={LoginScreen}></Page.Screen>
    </Page.Navigator>
  )
}