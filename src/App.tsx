import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/templates/body';
import Navbar from './components/templates/navbar';
import { GroupedTickets, Ticket, User, getGroupedTickets } from './util/utils';
import axios from 'axios';
import { TicketContext } from './context/tickets';

function App() {
  const groupState = sessionStorage.getItem('groupState');
  const orderState = sessionStorage.getItem('orderState');

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [grouping, setGrouping] = useState(groupState ? groupState : 'status');
  const [ordering, setOrdering] = useState(
    orderState ? orderState : 'priority'
  );
  const [groupedTickets, setGroupedTickets] = useState<GroupedTickets>({});

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          'https://api.quicksell.co/v1/internal/frontend-assignment'
        );
        setTickets(data.data.tickets);
        setUsers(data.data.users);
      } catch (error) {
        alert('Something went wrong!');
      }
    })();
  }, []);
  useEffect(() => {
    if (grouping === 'priority') setOrdering('title');
    sessionStorage.setItem('groupState', grouping);
    sessionStorage.setItem('orderState', ordering);
    const dd = getGroupedTickets(tickets, grouping, ordering);
    setGroupedTickets(dd);
  }, [tickets, ordering, grouping]);

  return (
    <div className='App'>
      <TicketContext.Provider
        value={{ tickets, users, grouping, ordering, groupedTickets }}
      >
        <Navbar setGrouping={setGrouping} setOrdering={setOrdering} />
        <Body />
      </TicketContext.Provider>
    </div>
  );
}

export default App;
