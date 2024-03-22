import { Outlet } from "react-router-dom";

// context
//import { useGlobalContext } from "../context/useGlobalContext";

// assets
import Wrapper from "../assets/wrappers/Dashboard";

// componets
import { NavBar, BigSidebar, SmallSidebar } from "../components";

const DashboardLayout = () => {
  //const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default DashboardLayout;
