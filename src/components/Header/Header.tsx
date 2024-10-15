import { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

const Header: FC = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <p>MovieFinder </p>
      </Link>
    </header>
  );
};

export default Header;
