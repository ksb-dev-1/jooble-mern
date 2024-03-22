// 3rd party libraries (react-icons)
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

// context
import { useGlobalContext } from "../context/useGlobalContext";

// assets
import Wrapper from "../assets/wrappers/ThemeToggle";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } =
    useGlobalContext() as GlobalContextProps;

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
