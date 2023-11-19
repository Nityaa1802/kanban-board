import { createContext } from 'react';
import { GroupedTickets, Ticket, User } from '../util/utils';

type TicketContextType = {
  tickets: Ticket[];
  users: User[];
  grouping: string;
  ordering: string;
  groupedTickets: GroupedTickets;
};

export const TicketContext = createContext<TicketContextType>({
  tickets: [],
  users: [],
  grouping: '',
  ordering: '',
  groupedTickets: {},
});
