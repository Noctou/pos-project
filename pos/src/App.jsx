import useTheme from './hooks/useThemeToggle';

import ThemeToggle from "./components/ThemeToggle";
import Sidebar from './components/Sidebar';
import Orders from './components/Orders';

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useTheme();

  return (
      <div className="container">
        <ThemeToggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
        
        <Sidebar />
          
        <div className="layer">
          <div className="items-container">
            
          </div>

          <div className="orders-container">
            <Orders />
          </div>

        </div>
      </div>
  )
}

export default App