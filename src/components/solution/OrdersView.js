import { StringBuffer } from '../../utils';

export default function OrdersView({ stockLength, kerf, orders }) {
  const html = new StringBuffer();
  html.append(`
    <div>
    <strong>订单</strong>
    <div class="d-flex flex-column flex-sm-row">
      <div class="flex-grow-1">
        <span class="p-1">材料长度:</span>
        <span class="p-1">${stockLength}</span>
      </div>
      <div class="flex-grow-1">
        <span class="p-1">切割损耗:</span>
        <span class="p-1">${kerf}</span>
      </div>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>长度</th>
          <th>数量</th>
        </tr>
      </thead>
      <tbody>
    `);
  orders.forEach((order) => {
    html.append(`<tr><td>${order.length}</td><td>${order.count}</td></tr>`);
  });
  html.append('</tbody></table>');
  return html.toString();
}
