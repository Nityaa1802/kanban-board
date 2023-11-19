import { ReactComponent as ChevronUp } from '../../../assets/icons/chevron-up.svg';
import { ReactComponent as ChevronDown } from '../../../assets/icons/chevron-down.svg';
import './index.css';

export default function Button({
  onClick,
  Icon,
  placeHolder,
  open,
}: {
  onClick: any;
  Icon?: any;
  placeHolder: string;
  open: boolean;
}) {
  return (
    <button
      className='button'
      onClick={(event) => {
        onClick(event);
      }}
    >
      {Icon && <Icon />}
      <p className='label'>{placeHolder}</p>
      {open ? (
        <ChevronUp className='chevron' />
      ) : (
        <ChevronDown className='chevron' />
      )}
    </button>
  );
}
