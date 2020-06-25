import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import { Context } from '../context';
import OrderLengthInput from './OrderLengthInput';
import OrderCountInput from './OrderCountInput';

import i18n from '../i18n';

export default function AddOrderView() {
  const { pendingOrderLength, pendingOrderCount, setOrders } = useContext(Context);

  const submit = () => {
    if (isNaN(pendingOrderLength) || isNaN(pendingOrderCount)) {
      return;
    }

    const length = pendingOrderLength;
    const count = pendingOrderCount;
    setOrders((orders) => {
      const pos = orders.findIndex((order) => order.length === length);
      if (pos > -1) {
        orders[pos].count += count;
      } else {
        orders.unshift({ length, count });
      }
      return orders.slice();
    });
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <OrderLengthInput styles={{ flex: 1 }} />
      <OrderCountInput styles={{ flex: 1 }} />

      <View style={{ justifyContent: 'center' }}>
        <Button title={i18n.t('add')} onPress={submit} />
      </View>
    </View>
  );
}
