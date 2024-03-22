import React, { useState } from "react";

const GlobalContext = React.createContext<GlobalContextProps | null>(null);

const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = { name: "john" };

  const [showSidebar, setShowSidebar] = useState(false);
  // Retrieve the value from localStorage
  const storedDarkTheme = localStorage.getItem("darkTheme");

  // Parse the stored value, or set a default if it's null
  const initialDarkTheme = storedDarkTheme
    ? JSON.parse(storedDarkTheme)
    : false;

  // Use useState to set the state
  const [isDarkTheme, setIsDarkTheme] = useState(initialDarkTheme);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme.toString());
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("toggle sidebar");
  };

  const logoutUser = async () => {
    console.log("logout user");
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        setIsDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
