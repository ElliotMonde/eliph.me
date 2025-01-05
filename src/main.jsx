import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HoverProvider } from './HoverProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HoverProvider>
      <App />
    </HoverProvider>
  </StrictMode>,
)
