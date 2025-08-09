import useTheme from './hooks/useThemeToggle';

import ThemeToggle from "./components/ThemeToggle";
import Sidebar from './components/Sidebar';
import Orders from './components/Orders';
import MainContent from './components/MainContent';

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useTheme();

  return (
      <div className="container">
        <ThemeToggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
        
        <Sidebar />
          
        <div className="layer">
          <div className="main-content-container">
            <MainContent />
          </div>

          <div className="orders-container">
            <div className="orders-header">
              <h1>Orders:</h1>
            </div>
            <div className='table-container'>
              <Orders />
            </div>
          </div>
        </div>
      </div>
  )
}

export default App