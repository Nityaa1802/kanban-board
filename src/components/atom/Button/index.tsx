import { ReactComponent as ChevronDown } from '../../../assets/icons/chevron-down.svg';
import './index.css';

export default function Button({
  onClick,
  Icon,
  placeHolder,
}: {
  onClick:  any;
  Icon?: any;
  placeHolder: string;
}) {
  return (
    <button className='button' onClick={onClick}>
      {Icon && <Icon />}
      <p>{placeHolder}</p>
      <ChevronDown className='chevron' />
    </button>
  );
}
