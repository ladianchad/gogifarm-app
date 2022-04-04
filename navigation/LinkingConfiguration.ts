/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootScreenLinkingList } from '../types';

const linking: LinkingOptions<RootScreenLinkingList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    initialRouteName: 'Root',
    screens: {
      Root: {
        initialRouteName: 'HomeTab',
        screens: {
          HomeTab: {
            initialRouteName: "Main",
            screens: {
              Main: "Main",
              Login: "Login",
              Product: "Product",
            }
          },
          CategoryTab: {
            
          },
          SearchTab: {
            screens: {
              Search: "Search"
            }
          },
          BagTab: {
            screens: {
              Bag: "Bag"
            }
          },
          MyPageTab: {
            screens: {
              MyPage: "MyPage"
            }
          }
        },
      },
      Modal: 'Modal',
      CategoryModal: 'CategoryModal',
      NotFound: '*',
    },
  },
};



export default linking;
