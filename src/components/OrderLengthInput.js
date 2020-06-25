import React, { useContext, useEffect } from 'react';
import { Input, Item, Label } from 'native-base';

import { Context } from '../context';
import * as Icons from './Icons';
import { toFloat } from '../utils';

import i18n from '../i18n';

export default function OrderLengthInput({ styles }) {
  const { stockLength, pendingOrderLength, setPendingOrderLength } = useContext(Context);

  const [text, setText] = React.useState('');
  const [valid, setValid] = React.useState(true);

  useEffect(() => {
    let value = toFloat(text);
    if (!isNaN(stockLength) && (value <= 0 || value > stockLength)) {
      value = NaN;
    }

    setPendingOrderLength(value);
    setValid(text === '' || !isNaN(value));
  }, [stockLength, text]);

  useEffect(() => {
    if (!isNaN) {
      setText(`${pendingOrderLength}`);
    }
  }, [pendingOrderLength]);

  return (
    <Item style={{ ...styles }}>
      <Label>{i18n.t('length')}:</Label>
      <Input keyboardType="numeric" value={text} onChangeText={setText} />
      {text === '' ? [] : valid ? <Icons.Valid /> : <Icons.Invalid />}
    </Item>
  );
}
