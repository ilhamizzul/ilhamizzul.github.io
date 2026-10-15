
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Check user preference for dark mode
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (userPrefersDark) {
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById("root")!).render(<App />);
