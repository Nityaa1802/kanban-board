export type Ticket = {
  id: string;
  title: string;
  userId: string;
  status: string;
  priority: number;
  tag: any;
};

export type User = {
  id: string;
  name: string;
  available: boolean;
};
export type GroupedTickets = {
  [category: number | string]: Ticket[];
};

export function getGroupedTickets(
  tickets: Ticket[],
  grouping: string,
  ordering: string
): GroupedTickets {
  if (ordering === 'priority') {
    tickets.sort((a, b) => b.priority - a.priority);
  } else {
    tickets.sort((a, b) => a.title.localeCompare(b.title));
  }
  return tickets.reduce((grouped: GroupedTickets, ticket: Ticket) => {
    const value =
      grouping !== 'users'
        ? ticket[grouping as keyof Ticket]
        : ticket['userId'];
    if (grouped[value]) {
      grouped[value].push(ticket);
    } else {
      grouped[value] = [ticket];
    }
    return grouped;
  }, {});
}
