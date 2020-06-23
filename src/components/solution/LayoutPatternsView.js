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
      <div class="flex-grow-1">
        <span class="p-1">所需材料:</span>
        <span class="p-1">${requiredStocks}</span>
      </div>
    </div>
    <div class="d-flex flex-column flex-sm-row">
      <div class="flex-grow-1">
        <span class="p-1">余料总长:</span>
        <span class="p-1">${round(materialWaste, 2) || ''}</span>
      </div>
      <div class="flex-grow-1">
        <span class="p-1">切割损耗:</span>
        <span class="p-1">${round(cutWaste, 2) || ''}</span>
      </div>
      <div class="flex-grow-1">
        <span class="p-1">损耗合计:</span>
        <span class="p-1">${totalWaste}(${round(totalWastePercentage, 2) || 0}%)</span>
      </div>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th class="text-nowrap">次数</th>
          <th class="text-nowrap">切割方法</th>
          <th class="text-nowrap">余料</th>
          <th class="text-nowrap">切割损耗</th>
          <th class="text-nowrap">损耗合计</th>
        </tr>
      </thead>
      <tbody>
  `);
  layoutPatterns.forEach((layoutPattern) =>
    html.append(LayoutPatternView(stockLength, layoutPattern))
  );
  html.append('</tbody></table></div>');
  return html.toString();
}
