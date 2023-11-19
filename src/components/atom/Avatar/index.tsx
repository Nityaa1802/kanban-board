import { useContext } from 'react';
import './index.css';
import { TicketContext } from '../../../context/tickets';
import { User } from '../../../util/utils';
import { getAvtarColors } from '../../../util/constants';
export default function Avatar({ user }: { user: User }) {
  function getInitials() {
    let initialsArray = user.name.split(' ');
    let initials = '';
    initialsArray.map((item) => {
      initials += item.charAt(0);
    });
    return initials;
  }

  return (
    <div id='avtar' style={{ backgroundColor: getAvtarColors.get(user.name) }}>
      {getInitials()}
      <div
        id='availableStatus'
        style={{
          backgroundColor: user.available ? '#e8b706' : '#dfe1e4',
        }}
      />
    </div>
  );
}
