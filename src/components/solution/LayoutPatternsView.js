import { StringBuffer, round } from '../../utils';
import LayoutPatternView from './LayoutPatternView';

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
    <strong>切割方案:</strong>
    <div class="d-flex flex-column flex-sm-row">
      <div class="w-100 w-sm-50">
        <span class="p-1">所需材料:</span>
        <span class="p-1">${requiredStocks}</span>
      </div>
      <div class="w-100 w-sm-50">
        <span class="p-1">余料总长:</span>
        <span class="p-1">${round(materialWaste, 2) || ''}</span>
      </div>
    </div>
    <div class="d-flex flex-column flex-sm-row">
      <div class="w-100 w-sm-50">
        <span class="p-1">切割损耗:</span>
        <span class="p-1">${round(cutWaste, 2) || ''}</span>
      </div>
      <div class="w-100 w-sm-50">
        <span class="p-1">损耗合计:</span>
        <span class="p-1">${totalWaste}(${round(totalWastePercentage, 2) || 0}%)</span>
      </div>
    </div>
    <ul class="list-group mb-3">
  `);
  layoutPatterns.forEach((layoutPattern) =>
    html.append(LayoutPatternView(stockLength, layoutPattern))
  );
  html.append('</div>');
  return html.toString();
}
