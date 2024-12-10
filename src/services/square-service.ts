import SquareModel from '../models/SquareModel';

const convertColumnNotation: Record<number, string> = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
};

export const getSquareCoordinate = (square: SquareModel): string => {
    return `${convertColumnNotation[square.column]}${square.row + 1}`;
};

export const isLightSquare = (square: SquareModel): boolean => {
    return (square.column + square.row) % 2 !== 0;
};
