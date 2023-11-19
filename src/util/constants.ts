import { ReactComponent as Urgent } from '../assets/icons/urgent.svg';
import { ReactComponent as High } from '../assets/icons/high.svg';
import { ReactComponent as Medium } from '../assets/icons/low.svg';
import { ReactComponent as Low } from '../assets/icons/medium.svg';
import { ReactComponent as NoPriority } from '../assets/icons/no-priority.svg';
import { ReactComponent as Backlog } from '../assets/icons/backlog.svg';
import { ReactComponent as Todo } from '../assets/icons/todo.svg';
import { ReactComponent as InProgress } from '../assets/icons/in-progress.svg';
import { ReactComponent as Canceled } from '../assets/icons/canceled.svg';
import { ReactComponent as Done } from '../assets/icons/done.svg';

export const getIcon = new Map([
  ['Urgent', Urgent],
  ['High', High],
  ['Low', Low],
  ['Medium', Medium],
  ['No priority', NoPriority],
  ['Backlog',Backlog],
  ['Todo', Todo],
  ['Canceled', Canceled],
  ['Done', Done],
  ['In progress', InProgress],
]);
export const priority = [
  { id: 0, name: 'No priority' },
  { id: 1, name: 'Low' },
  { id: 2, name: 'Medium' },
  { id: 3, name: 'High' },
  { id: 4, name: 'Urgent' },
];

export const status = [
  { name: 'Backlog' },
  { name: 'Todo' },
  { name: 'In progress' },
  { name: 'Done' },
  { name: 'Canceled' },
];

export const getAvtarColors = new Map([
  ['Anoop sharma', '#21b327'],
  ['Yogesh', '#a9259e'],
  ['Shankar Kumar', '#ea5735'],
  ['Ramesh', '#6840fe'],
  ['Suresh', '#eb5581'],
]);

