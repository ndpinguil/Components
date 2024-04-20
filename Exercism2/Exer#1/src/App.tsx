import React from 'react';
import './App.css';
export enum ResistorValues {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9
}

type Color = keyof typeof ResistorValues;

export function decodedValue(first: Color, second: Color): number {
  return Number(`${ResistorValues[first]}${ResistorValues[second]}`);
}

const ResistorDecoder: React.FC = () => {
  // Ejemplo de uso
  const value = decodedValue('brown', 'black');

  return (
    <div>
      <h2>Valor decodificado del resistor:</h2>
      <p>{value}</p>
    </div>
  );
};

export default ResistorDecoder;