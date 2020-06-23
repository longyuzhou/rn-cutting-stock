import React from 'react';
import { View, Button } from 'react-native';
import { Input, Item, Label } from 'native-base';
import * as Icons from './Icons';
import { toFloat, toInt } from '../utils';

export default function AddOrderView({ addOrder }) {
  const [length, setLength] = React.useState('');
  const [lengthValid, setLengthValid] = React.useState(true);

  const [count, setCount] = React.useState('');
  const [countValid, setCountValid] = React.useState(true);

  const onLengthChange = (text) => {
    setLength(text);
    const val = toFloat(text);
    setLengthValid(text === '' || (!isNaN(val) && val > 0));
  };

  const onCountChange = (text) => {
    setCount(text);
    const val = toInt(text);
    setCountValid(text === '' || (!isNaN(val) && val > 0));
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
    <View style={{ flexDirection: 'row' }}>
      <Item style={{ flex: 1, marginRight: 5 }}>
        <Label>尺寸:</Label>
        <Input value={length} keyboardType="numeric" onChangeText={onLengthChange} />
        {length !== '' ? lengthValid ? <Icons.Valid /> : <Icons.Invalid /> : null}
      </Item>

      <Item style={{ flex: 1, marginRight: 5 }}>
        <Label>数量:</Label>
        <Input value={count} keyboardType="numeric" onChangeText={onCountChange} />
        {count !== '' ? countValid ? <Icons.Valid /> : <Icons.Invalid /> : null}
      </Item>

      <View style={{ justifyContent: 'center' }}>
        <Button title="添加" onPress={submit} />
      </View>
    </View>
  );
}
