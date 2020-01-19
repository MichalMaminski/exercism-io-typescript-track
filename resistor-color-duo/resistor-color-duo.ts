// Black - Brown - Red - Orange - Yellow - Green - Blue - Violet - Grey - White
const colorToResistanceValue: {[color: string]: string} = 
{
  "black": "0",
  "brown": "1",
  "red": "2",
  "orange": "3",
  "yellow": "4",
  "green": "5",
  "blue": "6",
  "violet": "7",
  "grey": "8",
  "white":"9"
};

export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if(colors.length < 2) throw "At least two colors need to be present";
    this.colors = colors;

  }
  value = (): number => {
    const valueForFirstColor = colorToResistanceValue[this.colors[0]];
    const valueForSecondColor = colorToResistanceValue[this.colors[1]];
    return Number(valueForFirstColor+valueForSecondColor);
  };
}
