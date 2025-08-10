import { useState } from "react";

import './App.css'
import useTheme from './hooks/useThemeToggle';
import ThemeToggle from "./components/ThemeToggle";

import Sidebar from './components/Sidebar';
import HistoryPage from "./pages/HistoryPage";
import InventoryPage from "./pages/InventoryPage";
import HomePage from "./pages/HomePage";

function App() {
  const [darkMode, setDarkMode] = useTheme();
  const [currentPage, setCurrentPage] = useState("home"); 

  return (
      <>
        <div className="container home">
          <ThemeToggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

          <Sidebar onNavigate={setCurrentPage} />

          {currentPage === "home" && <HomePage />}
          {currentPage === "inventory-page" && <InventoryPage />}
          {currentPage === "history-page" && <HistoryPage />}
      </div>
    </>
  )
}

export default App