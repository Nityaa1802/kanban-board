import Button from '../../atom/Button';
import { SubHeading } from '../../atom/Heading';
import './index.css';
export default function Filters({
  label,
  setShowFilterDropdown,
  showFilterDropdown,
  options,
  setFilterValue,
  value,
}: {
  label: string;
  showFilterDropdown: string;
  setShowFilterDropdown: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}) {
  return (
    <div className='filters'>
      <span id='label'>
        <SubHeading text={label} />
      </span>
      <Button
        placeHolder={value}
        onClick={(event: any) => {
          event.stopPropagation();
          setShowFilterDropdown(showFilterDropdown !== label ? label : '');
        }}
      />
      {showFilterDropdown === label && (
        <div
          className='filterDropdown'
          style={{ top: label === 'Grouping' ? '50px' : '100px' }}
        >
          {options.map((item) => (
            <div
              onClick={() => {
                setFilterValue(item);
                setShowFilterDropdown('');
              }}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
