import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  en: {
    cuttingStock: 'Cutting Stock',
    stockLength: 'Stock length',
    kerf: 'Kerf',
    length: 'Length',
    quantity: 'Quantity',
    add: 'Add',
    solve: 'Solve',
    back: 'Back',
    solution: 'Solution',
    order: 'Order',
    requiredStocks: 'Required stocks',
    materialWaste: 'Material waste',
    cutWaste: 'Cut waste',
    totalWaste: 'Total waste',
    repetition: 'Repetition',
    layoutPatterns: 'Layout patterns',
    materialWasteDetail: 'Material waste details',
    cuts: 'Cuts',
  },
  zh: {
    cuttingStock: '材料切割',
    stockLength: '材料长度',
    kerf: '切割损耗',
    length: '尺寸',
    quantity: '数量',
    add: '添加',
    solve: '计算',
    back: '返回',
    solution: '切割方案',
    order: '订单',
    requiredStocks: '所需材料',
    materialWaste: '余料',
    cutWaste: '切割损耗',
    totalWaste: '损耗合计',
    repetition: '次数',
    layoutPatterns: '切割方案',
    materialWasteDetail: '余料详情',
    cuts: '切割方案',
  },
};

i18n.locale = Localization.locale;

i18n.fallbacks = true;

export default i18n;
