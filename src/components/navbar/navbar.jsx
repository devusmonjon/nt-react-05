import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-[33px] bg-[#F8F8F8] sticky top-0 duration-300 ${
        scrollY > 0 ? "shadow-md backdrop-blur-2xl bg-transparent" : ""
      }`}
    >
      <div className="container hiddden md:flex items-center justify-between">
        <Link to="/">
          <Logo large={false} />
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/delivery">Доставка</Link>
          </li>
          <li>
            <Link to="/terms">Условия</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
        <ul className="hidden sm:flex items-center gap-4">
          <li>
            <Link to="tel:+3757364636472">+ 375 736 463 64 72</Link>
          </li>
          <li>
            <Link to="tel:+3757364636472">+ 375 736 463 64 72</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
