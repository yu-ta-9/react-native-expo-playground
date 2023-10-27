import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from 'src/screens/home';
import { InfiniteScrollScreen } from 'src/screens/infinite-scroll';

import type { RootStackParamList } from 'src/navigation/bottom-tab/type';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />

        <Stack.Screen name='InfiniteScroll' component={InfiniteScrollScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
