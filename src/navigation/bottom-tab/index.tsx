import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from 'src/screens/home';
import { InfiniteScrollScreen } from 'src/screens/infinite-scroll';

import type { FC } from 'react';
import type { RootBottomTabParamList } from 'src/navigation/bottom-tab/type';

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

export const BottomTabNavigator: FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        // options={{
        //   ...options,
        //   headerShown: true,
        //   headerTitle: () => (
        //     <Image style={{ width: 120 }} resizeMode='contain' source={require('assets/logo-wide.png')} />
        //   ),
        //   tabBarIcon: ({ focused }) => <Icon name='home' size={24} color={!focused ? 'BLACK_80' : 'SOLID_100'} />,
        //   tabBarLabel: 'TOP',
        //   headerRight: () => <HeaderProfile />,
        // }}
      />

      <BottomTab.Screen
        name='InfiniteScroll'
        component={InfiniteScrollScreen}
        // options={{
        //   ...options,
        //   headerShown: true,
        //   headerTitle: () => (
        //     <Image style={{ width: 120 }} resizeMode='contain' source={require('assets/logo-wide.png')} />
        //   ),
        //   tabBarIcon: ({ focused }) => <Icon name='home' size={24} color={!focused ? 'BLACK_80' : 'SOLID_100'} />,
        //   tabBarLabel: 'TOP',
        //   headerRight: () => <HeaderProfile />,
        // }}
      />
    </BottomTab.Navigator>
  );
};
