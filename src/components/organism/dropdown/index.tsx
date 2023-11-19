import { useContext, useEffect, useState } from 'react';
import { ReactComponent as Filter } from '../../../assets/icons/filter.svg';
import Button from '../../atom/Button';
import './index.css';
import Filters from '../../molecules/filter';
import { TicketContext } from '../../../context/tickets';

export default function Dropdown({
  setGrouping,
  setOrdering,
}: {
  setGrouping: React.Dispatch<React.SetStateAction<string>>;
  setOrdering: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState('');

  const { grouping, ordering } = useContext(TicketContext);

  useEffect(() => {
    setShowDropdown(false);
  }, [grouping, ordering]);
  return (
    <div>
      <Button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
        placeHolder='Display'
        Icon={Filter}
        open={showDropdown}
      />
      {showDropdown && (
        <div
          id='dropdown'
          onClick={() => {
            setShowFilterDropdown('');
          }}
        >
          <Filters
            label='Grouping'
            setShowFilterDropdown={setShowFilterDropdown}
            showFilterDropdown={showFilterDropdown}
            options={['status', 'priority', 'users']}
            setFilterValue={setGrouping}
            value={grouping}
          />
          <Filters
            label='Ordering'
            setShowFilterDropdown={setShowFilterDropdown}
            showFilterDropdown={showFilterDropdown}
            options={['priority', 'title']}
            setFilterValue={setOrdering}
            value={ordering}
          />
        </div>
      )}
    </div>
  );
}
