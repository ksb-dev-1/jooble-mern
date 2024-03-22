interface GlobalContextProps {
  user: { name: string; avatar?: string };
  showSidebar: boolean;
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkTheme: () => void;
  toggleSidebar: () => void;
  logoutUser: () => void;
}
