import { Link, NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import {Bars3Icon} from "@heroicons/react/24/solid"
const links = [
  {
    href: "/",
    text: "home",
  },

  {
    href: "/about",
    text: "about us",
  },

  {
    href: "/services",
    text: "services",
  },

  {
    href: "/contact",
    text: "contact",
  },
];
const Header = () => {
  return (
    <header className="w-full   px-4 py-4 md:px-2       items-center        ">
      <div className="w-full max-w-[1400px] flex items-center gap-16 justify-between py-4   mx-auto  ">
        <div>
          <h1 className="capitalize font-bold  text-3xl">
            mz<span className="text-blue-700">tol</span>
          </h1>
        </div>
      <DesktopView/>
      <MobileView/>
      </div>
    </header>
  );
};
const MobileView = ()=>{
  return (
   <div className="  lg:hidden">
      <Button className="bg-transparent px-6 py-2 !rounded-lg">
      <Bars3Icon className="w-6 h-6 text-gray-900 "/>
      </Button>
   </div>
  )
}


const DesktopView = ()=>{
  return (
        <div className=" hidden  lg:flex items-center justify-between grow  ">
          <nav className="flex  grow ">
            <ul className="flex gap-10 items-center  ">
              {links.map((link, idx) => (
                <li
                  key={idx}
                  className="font-[600] font-inter   text-[20px]   text-gray-800 capitalize hover:text-primary"
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-primary" : ""
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-4 items-center">
            <Link to="/accounts/signup">
              <Button className="rounded-xl px-8 py-3.5 bg-transparent text-gray-700 hover:text-primary  capitalize  hover:ring-2  hover:ring-primary-500">log in</Button>
            </Link>

            <Link to="/accounts/login">
              <Button className="rounded-xl px-8 py-3.5  capitalize  ring-2 ring-blue-500">sign up</Button>
            </Link>
          </div>
        </div>
  )
}

export default Header;
