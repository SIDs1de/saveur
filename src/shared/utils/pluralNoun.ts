import { formatDecimal } from './formatDecimal';

export type ThreeForms = [string, string, string];
export type TwoForms = [string, string];

export function pluralNoun(num: number, ...forms: TwoForms | ThreeForms): string {
  let str;

  switch (forms.length) {
    case 2:
      str = num > 1 ? forms[1] : forms[0];
      break;

    default:
      str = forms[getNounPluralForm(num)];
      break;
  }

  return str.replace(/%d/g, formatDecimal(num));
}

function getNounPluralForm(a: number) {
  if (a % 10 === 1 && a % 100 !== 11) {
    return 0;
  } else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)) {
    return 1;
  } else {
    return 2;
  }
}
