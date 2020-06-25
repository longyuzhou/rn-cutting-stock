import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { Button, Text } from 'native-base';

import { Context, checkOrders } from '../context';
import OrderView from './OrderView';
import AddOrderView from './AddOrderView';
import StockLengthInput from './StockLengthInput';
import KerfInput from './KerfInput';
import { solve } from '../utils';

import i18n from '../i18n';

export default function CuttingStockView({ navigation }) {
  const {
    stockLength,
    stockLengthValid,
    kerf,
    kerfValid,
    orders,
    setSolution,
  } = useContext(Context);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    const v = stockLengthValid && kerf && checkOrders({ stockLength, orders });
    setValid(v);
  }, [stockLength, stockLengthValid, kerf, kerfValid, orders]);

  const onSubmit = () => {
    if (!valid) {
      Alert.alert('Please check your input');
      return;
    }

    setSolution(solve(stockLength, kerf, orders));
    navigation.navigate('Solution');
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ margin: 5 }}>
        <StockLengthInput />
        <KerfInput />
        <AddOrderView />
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => `${item.length}:${item.count}`}
        renderItem={({ item, index }) => (
          <OrderView order={item} index={index} />
        )}
      />

      <Button block onPress={onSubmit} style={{ margin: 5 }}>
        <Text>{i18n.t('solve')}</Text>
      </Button>
    </View>
  );
}
