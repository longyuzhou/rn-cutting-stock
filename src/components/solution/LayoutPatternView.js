import { StringBuffer, round } from '../../utils';

export default function LayoutPatternView(
  stockLength,
  { repetition, cuts, materialWaste, cutWaste, totalWaste }
) {
  const html = new StringBuffer();
  html.append(`<tr><td class="text-nowrap">${repetition}</td><td>`);
  cuts.forEach((cut) => html.append(`<span class="p-1">${cut.length}&times;${cut.count}</span>`));
  html.append(`</td>
    <td class="text-nowrap">${round(materialWaste, 2)}</td>
    <td class="text-nowrap">${round(cutWaste, 2)}</td>
    <td class="text-nowrap">
      ${totalWaste}
      (${round((totalWaste / stockLength) * 100, 2)}%)
    </td>
  </tr>
  `);
  return html.toString();
}
