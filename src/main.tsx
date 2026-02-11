import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './router/AppRouter.tsx'
import { RoleProvider } from './auth/RoleContext.tsx'
import { RoleSwitcher } from './auth/RoleSwitcher.tsx'

createRoot(document.getElementById("root")!).render(
  <>
    <RoleProvider>
      <RoleSwitcher />
      <AppRouter />
    </RoleProvider>
  </>,
);
