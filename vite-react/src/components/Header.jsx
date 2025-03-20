import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="nf">
        <span className="bolds">FickleFligh</span><span className="lights">t</span>
      </div>
      <div className="heads">
        <ul className="navv">
          <li>Explore</li>
          <li>Search</li>
          <li>Hotels</li>
          <li>Offers</li>
        </ul>
        <span className="bell">🔔</span>
        <img className="profilepic" src="/assets/profileimg.jpg" alt="Profile" />
      </div>
    </nav>
  );
};

export default Header;
