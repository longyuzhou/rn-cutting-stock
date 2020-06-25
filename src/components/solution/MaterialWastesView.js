import { StringBuffer } from '../../utils';

import i18n from '../../i18n';

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
    <strong>${i18n.t('materialWasteDetail')}:</strong>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>${i18n.t('length')}</th>
          <th>${i18n.t('quantity')}</th>
        </tr>
      </thead>
      <tbody>`);
  data.forEach((item) =>
    html.append(`<tr><td>${item.length}</td><td>${item.count}</td></tr>`)
  );
  html.append('</tbody></table></div>');
  return html.toString();
}
