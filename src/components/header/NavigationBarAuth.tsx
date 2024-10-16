import { Link } from 'react-router-dom';

const NavigationBarAuth = () => {
  return (
    <div className="flex w-40 justify-end">
      <ul className="flex gap-4">
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="rounded-md border border-white px-2 py-1 text-white transition-all duration-200 hover:bg-white hover:text-red-800"
          >
            JOIN US
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBarAuth;
