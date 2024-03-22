// 3rd party libraries (react-icons)
import { FaAlignLeft } from "react-icons/fa";

// assets
import Wrapper from "../assets/wrappers/Navbar";

// context
import { useGlobalContext } from "../context/useGlobalContext";

// components
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LogoutContainer from "./LogoutContainer";

const NavBar = () => {
  const { toggleSidebar } = useGlobalContext() as GlobalContextProps;

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
