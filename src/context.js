import React, { createContext, useState, useEffect } from 'react';

export const checkStockLength = ({ stockLength }) => {
  return (
    typeof stockLength === 'number' && !isNaN(stockLength) && stockLength > 0
  );
};

export const checkKerf = ({ stockLength, kerf }) => {
  const stockLengthValid = checkStockLength({ stockLength });
  return (
    typeof kerf === 'number' &&
    (isNaN(kerf) || (kerf >= 0 && (!stockLengthValid || kerf <= stockLength)))
  );
};

export const checkOrder = ({ stockLength, order }) => {
  const stockLengthValid = checkStockLength({ stockLength });
  const { length, count } = order;
  const countValid = Number.isInteger(count) && count > 0;
  const lengthValid =
    typeof length === 'number' &&
    !isNaN(length) &&
    length > 0 &&
    (!stockLengthValid || length <= stockLength);
  return countValid && lengthValid;
};

export const checkOrders = ({ stockLength, orders }) => {
  return orders
    .map((order) => checkOrder({ stockLength, order }))
    .reduce((prev, curr) => prev && curr, true);
};

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [stockLength, setStockLength] = useState(600.0);
  const [stockLengthValid, setStockLengthValid] = useState(true);

  const [kerf, setKerf] = useState(0.1);
  const [kerfValid, setKerfValid] = useState(true);

  const [pendingOrderLength, setPendingOrderLength] = useState(NaN);
  const [pendingOrderCount, setPendingOrderCount] = useState(NaN);

  const [orders, setOrders] = useState([
    { length: 100, count: 10 },
    { length: 190, count: 10 },
    { length: 300, count: 10 },
  ]);

  const [solution, setSolution] = useState();

  const value = {
    stockLength,
    setStockLength,
    stockLengthValid,
    setStockLengthValid,
    kerf,
    setKerf,
    kerfValid,
    setKerfValid,
    orders,
    setOrders,
    pendingOrderLength,
    setPendingOrderLength,
    pendingOrderCount,
    setPendingOrderCount,
    solution,
    setSolution,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
