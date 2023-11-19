import { useContext } from 'react';
import { Ticket, User } from '../../../util/utils';
import Avatar from '../../atom/Avatar';
import Heading, { SubHeading } from '../../atom/Heading';
import './index.css';
import { TicketContext } from '../../../context/tickets';
import { getIcon, priority } from '../../../util/constants';
export default function Tickets({ tickets }: { tickets: Ticket }) {
  const { grouping, users } = useContext(TicketContext);
  const Priority: any = getIcon.get(
    priority.find((item) => item.id === tickets.priority)?.name || ''
  );
  const Status: any = getIcon.get(tickets.status);
  return (
    <div id='tickets'>
      <div id='left'>
        <div id='text'>
          <SubHeading text={tickets.id} />
          <div id='heading'>
            {grouping !== 'status' && (
              <div id='status'>
                <Status />
              </div>
            )}
            <Heading text={tickets.title} />
          </div>
        </div>
        <div id='details'>
          {grouping !== 'priority' && (
            <div className='tags'>
              <Priority />
            </div>
          )}
          <div className='tags'>
            <SubHeading text={`• ${tickets.tag[0]}`} />
          </div>
        </div>
      </div>
      {grouping !== 'users' && (
        <div id='avtar'>
          <Avatar
            user={
              users.find((item) => item.id === tickets.userId) || ({} as User)
            }
          />
        </div>
      )}
    </div>
  );
}
