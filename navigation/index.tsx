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
import { Text, View } from '../components/Themed';
import HomeScreen from '../screens/HomeScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
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
      <Stack.Screen name="Root" component={BootomTabNavigatior}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BootomTab = createBottomTabNavigator<RootTabParamList>();

function BootomTabNavigatior() {
  return (
    <BootomTab.Navigator
      initialRouteName="Home"
      screenOptions={({navigation}) => ({
        tabBarLabelPosition: "below-icon",
        headerStyle: {
          backgroundColor: "#eb3300",
          height: 50,
          borderWidth: 0
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ffffff"
        },
        tabBarStyle: {
          borderTopColor: "#EBEBEB",
          backgroundColor: "#ffffff"
        },
        headerShown: false,
        headerTitle: () => {
          const onTitlePressed = () => {
            navigation.navigate('Home');
          }
          return(
          <Pressable onPress={onTitlePressed}>
            <Image style={{
              width: 220,
              height: 40
            }} 
            source={require('../assets/images/header-text-logo.png')}></Image>
          </Pressable>);
        },
        })}
      >
      <BootomTab.Screen
        name="Category"
        component={HomeScreen}
        options={() => ({
          title: 'Home',
          tabBarLabel: ({}) => <Text>카테고리</Text>,
          tabBarIcon: ({}) => <View 
            style={{
              width: 20,
              height: 20
            }}
            >
              <Text
                style={{
                  color: "#777",
                  height: 2,
                  backgroundColor: "#666",
                  fontSize: 10,
                  lineHeight: 10
                }}
              ></Text>
              <Text
                style={{
                  color: "#777",
                  height: 2,
                  backgroundColor: "#666"
                }}
              ></Text>
              <Text
                style={{
                  color: "#777",
                  height: 2,
                  backgroundColor: "#666"
                }}
              ></Text>
            </View>,
          headerShown: true
        })}
      />

      <BootomTab.Screen
        name="Search"
        component={NotFoundScreen}
        options={() => ({
          title: 'Home',
          tabBarLabel: ({}) => <Text>검색</Text>,
          tabBarIcon: ({}) => <Image 
            style={{
              width: 20,
              height: 20
            }}
            source={require('../assets/images/logo.png')} />,
        })}
      />

      <BootomTab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          title: 'Home',
          tabBarLabel: ({}) => <Text>홈</Text>,
          tabBarIcon: ({}) => <Image 
            style={{
              width: 20,
              height: 20
            }}
            source={require('../assets/images/logo.png')} />,
          headerShown: true,
        })}
      />

      <BootomTab.Screen
        name="Bag"
        component={NotFoundScreen}
        options={() => ({
          title: 'Home',
          tabBarLabel: ({}) => <Text>장바구니</Text>,
          tabBarIcon: ({}) => <Image 
            style={{
              width: 20,
              height: 20
            }}
            source={require('../assets/images/logo.png')} />,
        })}
      />
      <BootomTab.Screen
        name="MyPage"
        component={NotFoundScreen}
        options={() => ({
          title: 'Home',
          tabBarLabel: ({}) => <Text>마이페이지</Text>,
          tabBarIcon: ({}) => <Image 
            style={{
              width: 20,
              height: 20
            }}
            source={require('../assets/images/logo.png')} />,
        })}
      />


      
    </BootomTab.Navigator>
  );
}
