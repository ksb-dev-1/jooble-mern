// context
import { useGlobalContext } from "../context/useGlobalContext";

// assets
import Wrapper from "../assets/wrappers/BigSidebar";

// components
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";

const BigSidebar = () => {
  const { showSidebar } = useGlobalContext() as GlobalContextProps;

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
