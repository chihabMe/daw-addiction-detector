import { NavLink,Link } from "react-router-dom";
import Button from "../../ui/Button";
import DarkLightThemeToggler from "../DarkLightThemeToggler";

interface Props {
  links:{
    href:string;
    text:string;
  }[]
}
const HeaderDesktopView = ({links}:Props)=>{
  return (
        <div className=" hidden  lg:flex items-center justify-between grow  ">
          <nav className="flex  grow ">
            <ul className="flex gap-10 items-center  ">
              {links.map((link, idx) => (
                <li
                  key={idx}
                  className="font-[600] font-inter   text-[20px]   text-text-darker dark:text-text-ligther capitalize hover:text-primary"
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
            <DarkLightThemeToggler/>
            <Link to="/accounts/signup">
              <Button className="rounded-xl px-8 py-3.5 bg-transparent text-gray-700 dark:text-text-ligther hover:text-primary  capitalize  hover:ring-2  hover:ring-primary-500">log in</Button>
            </Link>

            <Link to="/accounts/login">
              <Button className="rounded-xl px-8 py-3.5  capitalize  ring-2 ring-blue-500">sign up</Button>
            </Link>

          </div>
        </div>
  )
  
}
export default HeaderDesktopView;
