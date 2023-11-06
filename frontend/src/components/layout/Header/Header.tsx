import {  NavLink } from "react-router-dom";
import Button from "../../ui/Button";
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
    href: "/doctors",
    text: "doctors",
  },

  {
    href: "/services",
    text: "services",
  },

  {
    href: "/contact",
    text: "contact us",
  },
];
const Header = () => {
  return (
    <header className="w-full  font-rubik   mx-auto items-center  items-center   flex justify-between">
      <div className="w-full max-w-[1400px] flex items-center justify-between py-4   mx-auto ">
        <div>
          <h1 className="capitalize font-bold  text-3xl">
            mz<span className="text-blue-700">tol</span>
          </h1>
        </div>
        <div className="flex items-center justify-between grow max-w-[900px]">
          <nav className="flex  grow ">
            <ul className="flex gap-10 items-center  ">
              {links.map((link,idx) => (
                <li key={idx} className="font-bold text-lg  text-gray-600 capitalize hover:text-blue-500">
                  <NavLink
                    to={link.href}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-blue-500" : ""
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Button>Sing up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
