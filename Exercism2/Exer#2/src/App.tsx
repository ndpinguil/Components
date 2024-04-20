import React from 'react';

interface ResistorColorProps {
  colors: string[];
}

const ResistorColor: React.FC<ResistorColorProps> = ({ colors }) => {
  const decodedResistorValue = (colors: string[]): string => {
    const [color1, color2, color3] = colors;
    const colorMap: { [color: string]: number } = {
      'black': 0,
      'brown': 1,
      'red': 2,
      'orange': 3,
      'yellow': 4,
      'green': 5,
      'blue': 6,
      'violet': 7,
      'grey': 8,
      'white': 9,
    };

    const mainValue = colorMap[color1] * 10 + colorMap[color2];
    let valueInOhms: string = '';

    if (color3 === 'black') {
      valueInOhms = `${mainValue} ohms`;
    } else if (color3 === 'green') {
      valueInOhms = `${mainValue * 1000} ohms`;
    } else if (color3 === 'blue') {
      valueInOhms = `${mainValue * 1000000} ohms`;
    } else if (color3 === 'violet') {
      valueInOhms = `${mainValue * 1000000000} ohms`;
    }

    if (valueInOhms === '') {
      throw new Error('Invalid color');
    }

    return valueInOhms;
  };

  return (
    <div>
      <p>{decodedResistorValue(colors)}</p>
    </div>
  );
};

export default ResistorColor;
