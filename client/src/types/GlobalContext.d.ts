interface GlobalContextProps {
  user: { name: string };
  showSidebar: boolean;
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
  logoutUser: () => void;
}
