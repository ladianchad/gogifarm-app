import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeBanner } from '../components/home/Banner';
import MainHeader from '../components/home/MainHeader';
import ItemNavigator from '../components/item/ItemNavigator';

import ItemList from '../components/item/ItemList';

export default function HomeScreen({navigation , route}) {

  const [headerPos, setHeaderPos] = useState<number>(0);

  const onScrolling = (event) => {
    const offset = event.nativeEvent.contentOffset.y;
    if(offset > 50){
      setHeaderPos(-50);
    }
    else {
      setHeaderPos(0);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <MainHeader navigation={navigation} positon={headerPos}/>
      <ItemNavigator navigation={navigation} position={headerPos}/>
      <ItemList headerComponent={HomeBanner}></ItemList>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  scrollArea: {
    width: '100%',
    overflow: 'scroll'
  }
});
