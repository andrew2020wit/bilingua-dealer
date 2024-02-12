import { TMorphologyReplaceRulesIds } from './compute-morphology-rule-ids.type';

export interface IMorphologyReplaceRule {
  ruleId: TMorphologyReplaceRulesIds;
  index: number;
  pattern: string;
  replace: string;
}
