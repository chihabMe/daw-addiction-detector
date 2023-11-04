import { Link } from "react-router-dom";
const links = [
  {
    href: "/",
    text: "home",
  },

  {
    href: "/about",
    text: "about",
  },

  {
    href: "/contact",
    text: "contact us",
  },
];
const Header = () => {
  return (
    <header className="w-full max-w-screen-2xl rounded-sm  mx-auto items-center px-2 py-4 bg-blue-400 flex justify-center">
      <nav>
        <ul className="flex gap-4 items-center  ">
          {links.map((link) => (
            <li className="font-medium text-white capitalize hover:text-blue-500">
              <Link to={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
