import { StringBuffer } from '../../utils';

import i18n from '../../i18n';

export default function OrdersView({ stockLength, kerf, orders }) {
  const html = new StringBuffer();
  html.append(`
    <div>
      <strong>${i18n.t('order')}</strong>
      <div class="d-flex flex-column flex-sm-row">
        <div class="w-100 w-sm-50">
          <span class="p-1">${i18n.t('stockLength')}:</span>
          <span class="p-1">${stockLength}</span>
        </div>
        <div class="w-100 w-sm-50">
          <span class="p-1">${i18n.t('kerf')}:</span>
          <span class="p-1">${kerf}</span>
        </div>
      </div>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>${i18n.t('length')}</th>
            <th>${i18n.t('quantity')}</th>
          </tr>
        </thead>
        <tbody>
    `);
  orders.forEach((order) => {
    html.append(`<tr><td>${order.length}</td><td>${order.count}</td></tr>`);
  });
  html.append('</tbody></table></div>');
  return html.toString();
}
