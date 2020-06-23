import React from 'react';
import { View } from 'react-native';
import { Input, Button, Text, Item, Label, Icon } from 'native-base';

import styles from '../styles';
import { toFloat, toInt } from '../utils';

export default function AddOrderView(props) {
  const { addOrder } = props;

  const [length, setLength] = React.useState('');
  const [lengthValid, setLengthValid] = React.useState(true);

  const [count, setCount] = React.useState('');
  const [countValid, setCountValid] = React.useState(true);

  const onLengthChange = (text) => {
    setLength(text);
    const num = toFloat(text);
    setLengthValid(text === '' || (!isNaN(num) && num > 0));
  };

  const onCountChange = (text) => {
    setCount(text);
    const num = toInt(text);
    setCountValid(text === '' || (!isNaN(num) && num > 0));
  };

  const submit = () => {
    if (length === '' || !lengthValid || count === '' || !countValid) {
      return;
    }

    addOrder({ length: toFloat(length), count: toInt(count) });

    setLength('');
    setCount('');
  };

  return (
    <View style={{ ...props.style, ...styles.horizontal }}>
      <Item error={!lengthValid} style={{ flex: 1, marginRight: 5 }}>
        <Label>尺寸:</Label>
        <Input value={length} keyboardType="numeric" onChangeText={onLengthChange} />
      </Item>

      <Item error={!countValid} style={{ flex: 1, marginRight: 5 }}>
        <Label>数量:</Label>
        <Input value={count} keyboardType="numeric" onChangeText={onCountChange} />
      </Item>

      <View style={{ justifyContent: 'center' }}>
        <Button success onPress={submit}>
          <Icon type="FontAwesome" name="plus" />
        </Button>
      </View>
    </View>
  );
}
