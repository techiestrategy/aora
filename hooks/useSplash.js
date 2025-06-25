// Example: useInitializeApp.js (in your hooks folder)

import Entypo from '@expo/vector-icons/Entypo'; // Example font
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function useInitializeApp() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Preload fonts or make necessary API calls
        await Font.loadAsync(Entypo.font);
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  return { appIsReady, onLayoutRootView };
}