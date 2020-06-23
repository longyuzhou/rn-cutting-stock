import 'react-native-gesture-handler';
import React from 'react';
import { Platform, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CuttingStockView from './components/CuttingStockView';
import SolutionView from './components/solution/SolutionView';

const avoidingBehavior = Platform.OS == 'ios' ? 'padding' : 'height';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={avoidingBehavior} style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Input">
            <Stack.Screen
              name="Input"
              component={CuttingStockView}
              options={{ title: '材料切割' }}
            />
            <Stack.Screen
              name="Output"
              component={SolutionView}
              options={{ title: '切割方案', headerBackTitle: '返回' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
