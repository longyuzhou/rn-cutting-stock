import { StringBuffer } from '../../utils';

export default function MaterialWastesView({ layoutPatterns }) {
  const data = [];
  layoutPatterns.forEach(({ repetition, materialWaste }) => {
    if (materialWaste <= 0) {
      return;
    }
    const entry = data.find((entry) => entry.length === materialWaste);
    if (entry) {
      entry.count += repetition;
    } else {
      data.push({ length: materialWaste, count: repetition });
    }
  });
  data.sort((a, b) => b.length - a.length);

  const html = new StringBuffer();
  html.append(`
  <div>
    <strong>余料详情:</strong>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>长度</th>
          <th>数量</th>
        </tr>
      </thead>
      <tbody>`);
  data.forEach((item) => html.append(`<tr><td>${item.length}</td><td>${item.count}</td></tr>`));
  html.append('</tbody></table></div>');
  return html.toString();
}
