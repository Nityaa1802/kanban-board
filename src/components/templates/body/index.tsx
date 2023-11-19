import { useContext } from 'react';

import './index.css';
import { TicketContext } from '../../../context/tickets';
import Rows from '../../organism/rows';
import Categories from '../../molecules/catagories';
import { getIcon, priority, status } from '../../../util/constants';

export default function Body() {
  const { groupedTickets, grouping, users } = useContext(TicketContext);
  function getHeader() {
    switch (grouping) {
      case 'status':
        return status;
      case 'priority':
        return priority;
      case 'users':
        return users;
      default:
        return [];
    }
  }
  return (
    <div id='body'>
      {getHeader().map((item: any) => {
        return (
          <div id='row' key={item.name}>
            <Categories
              key={item.name}
              {...(grouping !== 'users' && { Icon: getIcon.get(item.name) })}
              item={item}
            />
            <Rows
              tickets={
                grouping === 'status'
                  ? groupedTickets[item.name]
                  : groupedTickets[item.id]
              }
            />
          </div>
        );
      })}
    </div>
  );
}
