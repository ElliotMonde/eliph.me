import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HoverProvider, DarkModeProvider, MobileProvider } from './Providers.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <MobileProvider>
        <HoverProvider>
          <App />
        </HoverProvider>
      </MobileProvider>
    </DarkModeProvider>
  </StrictMode>,
)
