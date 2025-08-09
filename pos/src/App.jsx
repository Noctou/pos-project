import ThemeToggle from "./components/ThemeToggle";
import useTheme from './hooks/useThemeToggle';

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useTheme();
  
  return (
    <>
      <div className="container">
        <ThemeToggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
          
        <div className="layer">
          
        </div>
      </div>
    </>
  )
}

export default App