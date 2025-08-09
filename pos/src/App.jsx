import useTheme from './hooks/useThemeToggle';

import ThemeToggle from "./components/ThemeToggle";
import Sidebar from './components/Sidebar';
import Orders from './components/Orders';

import './App.css'
import MainContent from './components/MainContent';

function App() {
  const [darkMode, setDarkMode] = useTheme();

  return (
      <div className="body">
        <ThemeToggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
        
        <Sidebar />
          
        <div className="container">
          <div className="main-content-container">
            <MainContent />
          </div>
          <div className="orders-container">
            <Orders />
          </div>
        </div>
      </div>
  )
}

export default App