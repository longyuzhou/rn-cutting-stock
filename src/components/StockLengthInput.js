import React, { useEffect, useContext, useState } from 'react';
import { Input, Item, Label } from 'native-base';

import { Context, checkStockLength } from '../context';
import * as Icons from './Icons';
import { toFloat } from '../utils';

import i18n from '../i18n';

export default function StockLengthInput() {
  const { stockLength, setStockLength, stockLengthValid, setStockLengthValid } = useContext(
    Context
  );
  const [text, setText] = useState('');

  useEffect(() => {
    if (!isNaN(stockLength)) {
      setText(`${stockLength}`);
    }
  }, [stockLength]);

  useEffect(() => {
    let value = toFloat(text);
    const valid = checkStockLength({ stockLength: value });
    if (!valid) {
      value = NaN;
    }
    setStockLength(value);
    setStockLengthValid(valid);
  }, [text]);

  return (
    <Item>
      <Label>{i18n.t('stockLength')}:</Label>
      <Input keyboardType="numeric" value={text} onChangeText={setText} />
      {stockLengthValid ? <Icons.Valid /> : <Icons.Invalid />}
    </Item>
  );
}
