import {IMorphologyReplaceRule} from "./morphology-replace-rule.interface";

export function computeMorphologyRule(term: string, rule: IMorphologyReplaceRule): string | null {
  const patternIndexFromStart = rule.index >= 0 ? rule.index : term.length + rule.index;

  if (term.slice(patternIndexFromStart, patternIndexFromStart + rule.pattern.length) !== rule.pattern) {
    return null;
  }

  const restLength = term.length - (term.slice(0, rule.index).length + rule.pattern.length);

  let newTerm = term.slice(0, rule.index) + rule.replace;

  if (restLength > 0) {
    newTerm = newTerm + term.slice(-1 * restLength);
  }

  return newTerm;
}
