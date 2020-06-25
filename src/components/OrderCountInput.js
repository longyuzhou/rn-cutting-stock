import React, { useContext, useEffect } from 'react';
import { Input, Item, Label } from 'native-base';

import { Context } from '../context';
import * as Icons from './Icons';
import { toInt } from '../utils';

import i18n from '../i18n';

export default function OrderLengthInput({ styles }) {
  const { pendingOrderCount, setPendingOrderCount } = useContext(Context);

  const [text, setText] = React.useState('');
  const [valid, setValid] = React.useState(true);

  useEffect(() => {
    let value = toInt(text);
    if (value <= 0) {
      value = NaN;
    }

    setPendingOrderCount(value);
    setValid(text === '' || !isNaN(value));
  }, [text]);

  useEffect(() => {
    if (!isNaN) {
      setText(`${pendingOrderCount}`);
    }
  }, [pendingOrderCount]);

  return (
    <Item style={{ ...styles }}>
      <Label>{i18n.t('quantity')}:</Label>
      <Input keyboardType="numeric" value={text} onChangeText={setText} />
      {text === '' ? [] : valid ? <Icons.Valid /> : <Icons.Invalid />}
    </Item>
  );
}
