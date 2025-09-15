import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SettingsProvider from "./Provider/SettingsProvider.jsx";
import SingleImageModalProvider from "./Provider/SingleImageModalProvider.jsx";
import NameProvider from "./Provider/NameProvider.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <NameProvider>
          <SingleImageModalProvider>
              <SettingsProvider>
                  <App />
              </SettingsProvider>
          </SingleImageModalProvider>
      </NameProvider>
  </StrictMode>,
)
