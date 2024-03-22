import { NavLink } from "react-router-dom";

// 3rd party libraries (react-icons)
import { FaTimes } from "react-icons/fa";

// context
import { useGlobalContext } from "../context/useGlobalContext";

// assets
import Wrapper from "../assets/wrappers/SmallSidebar";

// components
import Logo from "./Logo";

// utils
import links from "../utils/links";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } =
    useGlobalContext() as GlobalContextProps;

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;

              return (
                <NavLink
                  to={path}
                  key={text}
                  className="nav-link"
                  onClick={toggleSidebar}
                  // will discuss in a second
                  end
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
