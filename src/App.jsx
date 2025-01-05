import { useLayoutEffect, useRef, useContext } from 'react';
import { HoverContext } from './HoverProvider';
import { DarkModeContext } from './DarkModeProvider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
export default function App() {
  const { isHovering } = useContext(HoverContext);
  const { isDarkMode } = useContext(DarkModeContext);
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  const cursor = useRef();
  const onCursorMove = (e) => {
    const { width, height } = container.current.getBoundingClientRect();
    const radius = cursor.current.getBoundingClientRect().width / 2;
    const x = e.x - width / 2 - radius;
    const y = e.y - height / 2 - radius;
    // console.log(`e.x: ${e.x},\ne.y: ${e.y},\nwidth:${width},\nheight: ${height},\ntop: ${top},\nleft: ${left}`);
    if (e.x < width - radius && e.y < height - radius) {
      gsap.to('.cursor', {
        x: x,
        y: y,
        duration: 0.6,
        ease: "power1",
        overwrite: true
      });
    }
  }
  useLayoutEffect(() => {
    container.current.addEventListener("mousemove", onCursorMove);
  }, []);

  return (
    <div ref={container} className={isDarkMode ? 'dark' : ''}>
      <div ref={cursor} className={`cursor ${isHovering ? 'w-[120px] h-[120px]' : ''}`} />
        <Header />
        <LandingPage />
    </div>
  )
}