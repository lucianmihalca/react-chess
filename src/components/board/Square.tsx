import SquareModel from '../../models/SquareModel';
import { getSquareCoordinate, isLightSquare } from '../../services/square-service';

interface Props {
    square: SquareModel;
}

const Square = ({ square }: Props) => {
    return (
        <div className={`w-full h-full ${isLightSquare(square) ? 'bg-neutral-100' : 'bg-orange-700'}`}>
            <span>{getSquareCoordinate(square)}</span>
        </div>
    );
};

export default Square;
