import React from 'react';
import { Platform, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ContextProvider } from './context';

import CuttingStockView from './components/CuttingStockView';
import SolutionView from './components/solution/SolutionView';

import i18n from './i18n';

export function App() {
  const avoidingBehavior = Platform.OS == 'ios' ? 'padding' : 'height';
  const Stack = createStackNavigator();

  return (
    <ContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior={avoidingBehavior} style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="CuttingStock">
              <Stack.Screen
                name="CuttingStock"
                component={CuttingStockView}
                options={{ title: i18n.t('cuttingStock') }}
              />
              <Stack.Screen
                name="Solution"
                component={SolutionView}
                options={{ title: i18n.t('solution'), headerBackTitle: i18n.t('back') }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ContextProvider>
  );
}
