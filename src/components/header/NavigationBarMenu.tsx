import { Link } from 'react-router-dom';

const NavigationBarMenu = () => {
  return (
    <div className="ml-40 flex justify-between text-2xl font-bold">
      <ul className="flex">
        <li className="w-40 text-right">
          <Link to="/introduce">KT WIZ</Link>
        </li>
        <li className="w-40 text-right">
          <Link to="/wiz-park">WIZ PARK</Link>
        </li>
        <li className="mr-44 w-40 text-right">
          <Link to="/direction">DIRECTION</Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="w-40 text-left">
          <Link to="/game">GAME</Link>
        </li>
        <li className="w-40 text-left">
          <Link to="/player">PLAYER</Link>
        </li>
        <li className="w-40 text-left">
          <Link to="/news">NEWS</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBarMenu;
