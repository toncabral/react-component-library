interface IFontFamilies {
  [index: string]: {
    font: string;
    fallback: string;
  };
}

const fontFamilies: IFontFamilies = {
  Montserrat: {
    font: 'Montserrat',
    fallback: 'Helvetica, Arial',
  },
  Anton: {
    font: 'Anton',
    fallback: 'Helvetica, Arial',
  },
  Trebuchet: {
    font: 'Trebuchet MS',
    fallback: 'Helvetica, Arial',
  },
};

const fontFamily = (family: string): string =>
  family
    ? `'${fontFamilies[family].font}', ${fontFamilies[family].fallback}, sans-serif`
    : 'inherit';

export default fontFamily;
