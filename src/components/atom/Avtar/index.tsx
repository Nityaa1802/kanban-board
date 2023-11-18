import './index.css';
export default function Avtar({
  name = 'Nitya Agarwal',
  available = true,
  color = '#2e973c',
}: {
  name?: string;
  available?: boolean;
  color?: string;
}) {
  function getInitials() {
    let initials = name.charAt(0);
    if (name.lastIndexOf(' ') + 1 < name.length) {
      initials += name.charAt(name.lastIndexOf(' ') + 1);
    }
    return initials;
  }
  return (
    <div id='avtar' style={{ backgroundColor: color }}>
      {getInitials()}
      <div
        id='availableStatus'
        style={{
          backgroundColor: available ? '#e8b706' : '#dfe1e4',
        }}
      />
    </div>
  );
}
