import { useRef, useContext } from 'react';
import { DarkModeContext } from './Providers';
import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import { Cursor } from './components/Cursor';
export default function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  
  const container = useRef();
  return (
    <div ref={container} className={`${isDarkMode ? 'dark' : ''} bg-transition overflow-x-hidden overflow-y-scroll h-[300vh] w-dvw`}>
      <Cursor parent_ref={container} />
      <Header />
      <LandingPage />
    </div>
  )
}