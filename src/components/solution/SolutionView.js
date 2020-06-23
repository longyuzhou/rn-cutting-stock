import React from 'react';
import WebView from 'react-native-webview';

import { StringBuffer } from '../../utils';
import OrdersView from './OrdersView';
import LayoutPatternsView from './LayoutPatternsView';
import MaterialWastesView from './MaterialWastesView';
import Bootstrap from './Bootstrap';

export default function SolutionView({ route }) {
  const html = new StringBuffer()
    .append('<html><head><style>')
    .append(Bootstrap())
    .append('</style></head><body>')
    .append('<div class="container-fluid">')
    .append(OrdersView(route.params))
    .append(LayoutPatternsView(route.params))
    .append(MaterialWastesView(route.params))
    .append('</div></body></html>')
    .toString();

  return <WebView style={{ flex: 1 }} source={{ html: html }} />;
}
