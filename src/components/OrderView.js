import React from 'react';
import { View } from 'react-native';
import { Button, ListItem, Text, Body, Right, Icon } from 'native-base';
import styles from '../styles';

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
        <View style={styles.horizontal}>
          <Button small danger onPress={zero} style={{ marginRight: 5 }}>
            <Icon type="FontAwesome" name="trash" />
          </Button>
          <Button small danger onPress={decrement} style={{ marginRight: 5 }}>
            <Icon type="FontAwesome" name="minus" />
          </Button>
          <Button small success onPress={increment} style={{ marginRight: 5 }}>
            <Icon type="FontAwesome" name="plus" />
          </Button>
        </View>
      </Right>
    </ListItem>
  );
}
