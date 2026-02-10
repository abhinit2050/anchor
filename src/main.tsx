import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './router/AppRouter.tsx'
import { RoleProvider } from './auth/RoleContext.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoleProvider>
      <AppRouter />
    </RoleProvider>
  </StrictMode>,
);
