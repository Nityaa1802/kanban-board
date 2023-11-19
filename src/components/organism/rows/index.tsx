import { Ticket } from '../../../util/utils';
import Tickets from '../../molecules/tickets';
import './index.css';
export default function Rows({ tickets }: { tickets: Ticket[] | undefined }) {
  return (
    <div id='ticket-row'>
      {tickets &&
        tickets.map((tickets) => (
          <Tickets tickets={tickets} key={tickets.id} />
        ))}
    </div>
  );
}
