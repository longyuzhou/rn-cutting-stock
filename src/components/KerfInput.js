import React, { useState, useEffect, useContext } from 'react';
import { Input, Item, Label } from 'native-base';

import { Context, checkKerf } from '../context';
import * as Icons from './Icons';
import { toFloat } from '../utils';

import i18n from '../i18n';

export default function KerfInput() {
  const { stockLength, kerf, setKerf, kerfValid, setKerfValid } = useContext(Context);
  const [text, setText] = useState('');

  useEffect(() => {
    if (!isNaN(kerf)) {
      setText(`${kerf}`);
    }
  }, [kerf]);

  useEffect(() => {
    let value = toFloat(text);
    const valid = checkKerf({ stockLength, kerf: value });
    if (!valid) {
      value = NaN;
    }

    setKerf(value);
    setKerfValid(text === '' || (!isNaN(value) && valid));
  }, [text, stockLength]);

  return (
    <Item>
      <Label>{i18n.t('kerf')}:</Label>
      <Input keyboardType="numeric" value={text} onChangeText={setText} />
      {kerfValid ? <Icons.Valid /> : <Icons.Invalid />}
    </Item>
  );
}
