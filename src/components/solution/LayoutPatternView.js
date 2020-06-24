import { StringBuffer, round } from '../../utils';

export default function LayoutPatternView(
  stockLength,
  { repetition, cuts, materialWaste, cutWaste, totalWaste }
) {
  const html = new StringBuffer();
  html.append(`
  <li class="list-group-item">
    <div class="d-flex flex-column flex-sm-row">
      <div class="w-100 w-sm-50">
        <span class="p-1">次数:</span>
        <span class="p-1">${repetition}</span>
      </div>
      <div class="w-100 w-sm-50">
        <span class="p-1">余料:</span>
        <span class="p-1">${round(materialWaste, 2)}</span>
      </div>
    </div>
    <div class="d-flex flex-column flex-sm-row">
      <div class="w-100 w-sm-50">
        <span class="p-1">切割损耗:</span>
        <span class="p-1">${round(cutWaste, 2)}</span>
      </div>
      <div class="w-100 w-sm-50">
        <span class="p-1">损耗合计:</span>
        <span class="p-1">
          ${round(totalWaste, 2)}
          (${round((totalWaste / stockLength) * 100, 2)}%)
        </span>
      </div>
    </div>
    <div class="d-flex flex-column flex-sm-row">
      <div class="w-100">
        <span class="p-1">切割方案:</span>
  `);
  cuts.forEach((cut) => html.append(`<span class="p-1">${cut.length}&times;${cut.count}</span>`));
  html.append('</div></div></li>');
  return html.toString();
}
