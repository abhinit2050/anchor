import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './router/AppRouter.tsx'
import { RoleProvider } from './auth/RoleContext.tsx'
import { ThemeProvider } from './ui/themeContext.tsx'

createRoot(document.getElementById("root")!).render(
  <>
    <RoleProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </RoleProvider>
  </>,
);
