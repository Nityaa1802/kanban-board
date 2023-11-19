import './index.css';
import Heading, { SubHeading } from '../../atom/Heading';
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as OptionDots } from '../../../assets/icons/options-dots.svg';
import Avatar from '../../atom/Avatar';
export default function Categories({
  Icon,
  item,
  total,
}: {
  Icon?: any;
  item: any;
  total?: string;
}) {
  return (
    <div id='category'>
      <div id='first'>
        {Icon ? <Icon /> : <Avatar user={item} />}
        <Heading text={item.name} />
        {total && <SubHeading text={total} />}
      </div>
      <div id='second'>
        <Plus />
        <OptionDots />
      </div>
    </div>
  );
}
