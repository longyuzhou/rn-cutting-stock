import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Text, ListItem, Body, Button, Right, Left } from 'native-base';

import { Context, checkOrder } from '../context';
import * as Icons from './Icons';

export default function OrderView({ order, index }) {
  const { stockLength, orders, setOrders } = useContext(Context);
  const [valid, setValid] = useState(true);

  useEffect(() => setValid(checkOrder({ stockLength, order })), [stockLength]);

  const incrementCount = () => {
    orders[index].count++;
    setOrders(orders.slice());
  };

  const decrementCount = () => {
    if (order.length <= 1) {
      remove();
    }
    orders[index].count--;
    setOrders(orders.slice());
  };

  const remove = () => {
    orders.splice(index, 1);
    setOrders(orders.slice());
  };

  return (
    <ListItem icon>
      <Left>{valid ? <Icons.Valid /> : <Icons.Invalid />}</Left>
      <Body>
        <Text>{`${order.length} × ${order.count}`}</Text>
      </Body>
      <Right>
        <View style={{ flexDirection: 'row' }}>
          <Button small transparent onPress={remove}>
            <Icons.Delete />
          </Button>
          <Button small transparent onPress={decrementCount}>
            <Icons.Decrement />
          </Button>
          <Button small transparent onPress={incrementCount}>
            <Icons.Increment />
          </Button>
        </View>
      </Right>
    </ListItem>
  );
}
