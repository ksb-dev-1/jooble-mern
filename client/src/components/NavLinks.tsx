import { NavLink } from "react-router-dom";

// context
import { useGlobalContext } from "../context/useGlobalContext";

// utils
import links from "../utils/links";

const NavLinks = ({ isBigSidebar }: { isBigSidebar: boolean }) => {
  const { toggleSidebar } = useGlobalContext() as GlobalContextProps;

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        // admin user
        return (
          <NavLink
            to={path}
            key={text}
            onClick={isBigSidebar ? () => {} : toggleSidebar}
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
