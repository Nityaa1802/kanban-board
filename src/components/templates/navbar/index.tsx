import Dropdown from '../../organism/dropdown';
import './index.css'

export default function Navbar({setGrouping,setOrdering}: {
  setGrouping: React.Dispatch<React.SetStateAction<string>>;
  setOrdering: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <nav id='navBar'>
      <Dropdown setGrouping={setGrouping} setOrdering={setOrdering}/>
    </nav>
  );
}
