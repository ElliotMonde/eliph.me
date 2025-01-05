import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HoverProvider } from './HoverProvider.jsx';
import { DarkModeProvider } from './DarkModeProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
    <HoverProvider>
      <App />
      </HoverProvider>
    </DarkModeProvider>
  </StrictMode>,
)
