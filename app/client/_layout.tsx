import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="create"
        options={optionWithHeader}
      />
      <Stack.Screen 
        name="[id]"
        options={optionWithHeader}
      />
    </Stack>
  );
}

const optionWithHeader = {
  headerShown: true,
  title: 'Voltar',
  headerStyle: {
    backgroundColor: 'rgba(139, 191, 168, 1.0)',
  },
  headerTintColor: 'white',
}
