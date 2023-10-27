import { View, Text, StyleSheet } from 'react-native';

import type { FC } from 'react';

export const InfiniteScroll: FC = () => {
  return (
    <View style={styles.root}>
      <Text>無限スクロール</Text>
      <View style={styles.card}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {},
});
