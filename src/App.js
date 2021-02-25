import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import {useState} from 'react'
import './App.css';



function App() {
  const [darkMode, setDarkMode] = useState(true)

  const changeMode = () =>{
    setDarkMode(!darkMode);
  }

  return (
    <div className="container">
      <Header 
        title='My Website'
        darkMode={darkMode}
        changeMode={changeMode}
        />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
