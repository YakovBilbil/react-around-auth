import headerImage from "../images/headerImage.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerImage}
        alt="Title: Around the U.S."
      />
    </header>
  );
}

export default Header;
