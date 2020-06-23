import React from 'react';
import { Button, Icon } from 'native-base';
import WebView from 'react-native-webview';
import * as Print from 'expo-print';
import OrdersView from './OrdersView';
import * as Icons from '../Icons';
import LayoutPatternsView from './LayoutPatternsView';
import MaterialWastesView from './MaterialWastesView';
import Bootstrap from './Bootstrap';
import { StringBuffer } from '../../utils';

export default function SolutionView({ route: { params }, navigation }) {
  const html = new StringBuffer()
    .append('<!DOCTYPE html><html><head>')
    .append('<meta charset="utf-8" />')
    .append('<meta http-equiv="X-UA-Compatible" content="IE=edge" />')
    .append('<meta name="viewport" content="width=device-width,initial-scale=1.0" />')
    .append('<style>')
    .append(Bootstrap())
    .append('</style>')
    .append('</head><body>')
    .append('<div class="container-fluid">')
    .append(OrdersView(params))
    .append(LayoutPatternsView(params))
    .append(MaterialWastesView(params))
    .append('</div></body></html>')
    .toString();

  const print = () => {
    Print.printAsync({ html: html }).catch(() => {});
  };

  navigation.setOptions({
    headerRight: () => (
      <Button transparent onPress={print}>
        <Icons.Printer />
      </Button>
    ),
  });

  return <WebView source={{ html: html }} />;
}
