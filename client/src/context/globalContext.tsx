import React, { useState } from "react";

const GlobalContext = React.createContext<GlobalContextProps | null>(null);

const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = { name: "john" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
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
