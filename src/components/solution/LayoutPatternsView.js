import { StringBuffer, round } from '../../utils';
import LayoutPatternView from './LayoutPatternView';

import i18n from '../../i18n';

export default function LayoutPatternsView({
  stockLength,
  requiredStocks,
  materialWaste,
  cutWaste,
  totalWaste,
  totalWastePercentage,
  layoutPatterns,
}) {
  const html = new StringBuffer();
  html.append(`
  <div>
    <strong>${i18n.t('layoutPatterns')}:</strong>
    <div class="d-flex flex-column flex-sm-row">
      <div class="w-100 w-sm-50">
        <span class="p-1">${i18n.t('requiredStocks')}:</span>
        <span class="p-1">${requiredStocks}</span>
      </div>
      <div class="w-100 w-sm-50">
        <span class="p-1">${i18n.t('materialWaste')}:</span>
        <span class="p-1">${round(materialWaste, 2) || ''}</span>
      </div>
    </div>
    <div class="d-flex flex-column flex-sm-row">
      <div class="w-100 w-sm-50">
        <span class="p-1">${i18n.t('cutWaste')}:</span>
        <span class="p-1">${round(cutWaste, 2) || ''}</span>
      </div>
      <div class="w-100 w-sm-50">
        <span class="p-1">${i18n.t('totalWaste')}:</span>
        <span class="p-1">
          ${totalWaste}
          (${round(totalWastePercentage, 2) || 0}%)
        </span>
      </div>
    </div>
    <ul class="list-group mb-3">
  `);
  layoutPatterns.forEach((layoutPattern) =>
    html.append(LayoutPatternView(stockLength, layoutPattern))
  );
  html.append('</ul></div>');
  return html.toString();
}
