import { StringBuffer, round } from '../../utils';

import i18n from '../../i18n';

export default function LayoutPatternView(
  stockLength,
  { repetition, cuts, materialWaste, cutWaste, totalWaste }
) {
  const html = new StringBuffer();
  html.append(`
  <li class="list-group-item">
    <div class="d-flex flex-column flex-sm-row">
      <div class="w-100 w-sm-50">
        <span class="p-1">${i18n.t('repetition')}:</span>
        <span class="p-1">${repetition}</span>
      </div>
      <div class="w-100 w-sm-50">
        <span class="p-1">${i18n.t('materialWaste')}:</span>
        <span class="p-1">${round(materialWaste, 2)}</span>
      </div>
    </div>
    <div class="d-flex flex-column flex-sm-row">
      <div class="w-100 w-sm-50">
        <span class="p-1">${i18n.t('cutWaste')}:</span>
        <span class="p-1">${round(cutWaste, 2)}</span>
      </div>
      <div class="w-100 w-sm-50">
        <span class="p-1">${i18n.t('totalWaste')}:</span>
        <span class="p-1">
          ${round(totalWaste, 2)}
          (${round((totalWaste / stockLength) * 100, 2)}%)
        </span>
      </div>
    </div>
    <div class="d-flex flex-column flex-sm-row">
      <div class="w-100">
        <span class="p-1">${i18n.t('cuts')}:</span>
  `);
  cuts.forEach((cut) =>
    html.append(`<span class="p-1">${cut.length}&times;${cut.count}</span>`)
  );
  html.append('</div></div></li>');
  return html.toString();
}
