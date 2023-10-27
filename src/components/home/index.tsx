import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import type { NavigationProp } from '@react-navigation/native';
import type { FC } from 'react';
import type { RootStackParamList } from 'src/navigation/bottom-tab/type';

export const Home: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />

      <TouchableOpacity onPress={() => navigation.navigate('InfiniteScroll')}>
        <Text>無限スクロール</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
