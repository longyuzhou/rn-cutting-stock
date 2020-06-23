import React from 'react';
import { View, FlatList } from 'react-native';
import { Input, Button, Text, Item, Label, Icon } from 'native-base';
import styles from '../styles';
import OrderView from './OrderView';
import AddOrderView from './AddOrderView';
import { solve, toFloat } from '../utils';

export default function CuttingStockView({ navigation }) {
  const [stockLength, setStockLength] = React.useState('600');
  const [stockLengthValid, setStockLengthValid] = React.useState(true);
  const onStockLengthChange = (text) => {
    setStockLength(text);
    const f = toFloat(text);
    setStockLengthValid(!isNaN(f) && f > 0);
  };

  const [kerf, setKerf] = React.useState('0.1');
  const [kerfValid, setKerfValid] = React.useState(true);
  const onKerfChange = (text) => {
    setKerf(text);
    const f = toFloat(text);
    setKerfValid(text === '' || (!isNaN(f) && f >= 0));
  };

  const [orders, setOrders] = React.useState([
    { length: 100, count: 10 },
    { length: 190, count: 10 },
    { length: 300, count: 10 },
  ]);

  const addOrder = ({ length, count }) => {
    if (typeof length !== 'number' || isNaN(length) || typeof count !== 'number' || isNaN(count)) {
      return;
    }

    const pos = orders.findIndex((order) => order.length === length);
    if (pos > -1) {
      orders[pos].count += count;
    } else {
      orders.unshift({ length, count });
    }
    setOrders(orders.slice());
  };

  const modifyOrder = (order) => {
    if (order.count <= 0) {
      return removeOrder(order);
    }

    const pos = orders.findIndex((item) => item.length === order.length);
    if (pos < 0) {
      return;
    }
    orders[pos] = order;
    setOrders(orders.slice());
  };

  const removeOrder = (order) => {
    const pos = orders.findIndex((item) => item.length === order.length);
    if (pos < 0) {
      return;
    }

    orders.splice(pos, 1);
    setOrders(orders.slice());
  };

  const onSolveButtonPress = () => {
    if (!stockLengthValid || !kerfValid) {
      return;
    }

    const solution = solve(toFloat(stockLength), kerf !== '' ? toFloat(kerf) : 0, orders);
    navigation.navigate('Output', solution);
  };

  return (
    <View style={{ ...styles.container, ...styles.vertical }}>
      <View style={{ margin: 5 }}>
        <Item success={stockLengthValid} error={!stockLengthValid}>
          <Label>材料长度:</Label>
          <Input keyboardType="numeric" value={stockLength} onChangeText={onStockLengthChange} />
        </Item>

        <Item success={kerfValid} error={!kerfValid}>
          <Label>切割损耗:</Label>
          <Input keyboardType="numeric" value={kerf} onChangeText={onKerfChange} />
        </Item>

        <AddOrderView addOrder={addOrder} />
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => `${item.length}:${item.count}`}
        renderItem={({ item }) => <OrderView order={item} modifyOrder={modifyOrder} />}
      />

      <Button block onPress={onSolveButtonPress} style={{ margin: 5 }}>
        <Text>计算</Text>
      </Button>
    </View>
  );
}
