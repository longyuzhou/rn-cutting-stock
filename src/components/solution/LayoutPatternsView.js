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
    <div class="row">
      <div class="col-2">所需材料:</div>
      <div class="col-2">${requiredStocks}</div>
    </div>
    <div class="row">
      <div class="col-2">余料总长:</div>
      <div class="col-2">${round(materialWaste, 2) || ''}</div>
      <div class="col-2">切割损耗:</div>
      <div class="col-2">${round(cutWaste, 2) || ''}</div>
      <div class="col-2">损耗合计:</div>
      <div class="col-2">${totalWaste}(${round(totalWastePercentage, 2)}%)</div>
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
