import React from 'react';
import { Icon } from 'native-base';

const Valid = () => <Icon type="FontAwesome" name="check" style={{ color: '#03cc4c' }} />;
const Invalid = () => <Icon type="FontAwesome" name="exclamation" style={{ color: '#ff3b2f' }} />;

const Delete = () => <Icon type="FontAwesome" name="trash" style={{ color: '#ff3b2f' }} />;
const Decrement = () => <Icon type="FontAwesome" name="minus" style={{ color: '#ff3b2f' }} />;
const Increment = () => <Icon type="FontAwesome" name="plus" style={{ color: '#03cc4c' }} />;

const Printer = () => <Icon name="printer" type="SimpleLineIcons" style={{ color: '#1f6cba' }} />;

export { Valid, Invalid, Delete, Decrement, Increment, Printer };
