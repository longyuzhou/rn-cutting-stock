import React from 'react';
import { View } from 'react-native';
import { Text, ListItem, Body, Button, Right } from 'native-base';

import * as Icons from './Icons';

export default function OrderView({ order, modifyOrder }) {
  const { length, count } = order;

  const increment = () => {
    modifyOrder({ length, count: count + 1 });
  };

  const decrement = () => {
    modifyOrder({ length, count: count - 1 });
  };

  const zero = () => {
    modifyOrder({ length, count: 0 });
  };

  return (
    <ListItem>
      <Body>
        <Text>{`${length} × ${count}`}</Text>
      </Body>
      <Right>
        <View style={{ flexDirection: 'row' }}>
          <Button small transparent onPress={zero}>
            <Icons.Delete />
          </Button>
          <Button small transparent onPress={decrement}>
            <Icons.Decrement />
          </Button>
          <Button small transparent onPress={increment}>
            <Icons.Increment />
          </Button>
        </View>
      </Right>
    </ListItem>
  );
}
