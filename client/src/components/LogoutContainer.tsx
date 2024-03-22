import { useState } from "react";

// 3rd party libraries (react-icons)
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

// context
import { useGlobalContext } from "../context/useGlobalContext";

// assets
import Wrapper from "../assets/wrappers/LogoutContainer";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useGlobalContext() as GlobalContextProps;

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user?.avatar ? (
          <img src={user?.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}

        {user?.name}
        <FaCaretDown />
      </button>

      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
