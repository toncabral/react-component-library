const colors: { [index: string]: string } = {
  red: '#e94b35',
  blue: '#337ab7',
  blueHover: '#286090',
  green: '#3c763d',
  greenHover: '#2b542c',
  orange: '#ff9900',
  white: '#FFF',
};

const color = (colorName: string): string =>
  colorName ? colors[colorName] : 'inherit';

export default color;
