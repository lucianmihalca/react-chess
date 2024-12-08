import SquareModel from '../models/SquareModel';
import { getSquareCoordinate } from '../services/square-service';

interface Props {
    square: SquareModel;
}

const Square = ({ square }: Props) => {
    return (
        <div>
            <span>{getSquareCoordinate(square)}</span>
        </div>
    );
};

export default Square;
