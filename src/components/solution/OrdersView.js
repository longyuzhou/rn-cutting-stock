import { StringBuffer } from '../../utils';

export default function OrdersView({ stockLength, kerf, orders }) {
  const html = new StringBuffer();
  html.append(`
    <div>
    <strong>订单</strong>
    <div class="row">
      <div class="col-2">材料长度:</div>
      <div class="col-2">${stockLength}</div>
      <div class="col-2">切割损耗:</div>
      <div class="col-2">${kerf}</div>
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
