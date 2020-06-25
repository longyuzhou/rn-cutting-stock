import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import { Button } from 'native-base';
import WebView from 'react-native-webview';
import * as Print from 'expo-print';

import { Context } from '../../context';
import OrdersView from './OrdersView';
import LayoutPatternsView from './LayoutPatternsView';
import MaterialWastesView from './MaterialWastesView';
import * as Icons from '../Icons';
import Bootstrap from './Bootstrap';
import { StringBuffer } from '../../utils';

export default function SolutionView({ navigation }) {
  const { solution } = useContext(Context);
  const [html, setHtml] = useState('');

  useEffect(() => {
    setHtml(
      new StringBuffer()
        .append('<!DOCTYPE html><html><head>')
        .append('<meta charset="utf-8" />')
        .append('<meta http-equiv="X-UA-Compatible" content="IE=edge" />')
        .append(
          '<meta name="viewport" content="width=device-width,initial-scale=1.0" />'
        )
        .append(Bootstrap())
        .append('</head><body>')
        .append('<div class="container-fluid">')
        .append(OrdersView(solution))
        .append(LayoutPatternsView(solution))
        .append(MaterialWastesView(solution))
        .append('</div></body></html>')
        .toString()
    );
  }, [solution]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          transparent
          onPress={() => Print.printAsync({ html: html }).catch(() => {})}
        >
          <Icons.Printer />
        </Button>
      ),
    });
  }, [navigation, html]);

  return <WebView source={{ html: html }} />;
}
