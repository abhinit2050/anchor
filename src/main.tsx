import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './router/AppRouter.tsx'
import { RoleProvider } from './auth/RoleContext.tsx'
import { ThemeProvider } from './ui/themeContext.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

createRoot(document.getElementById("root")!).render(
  <>
  <Provider store={store}>
    <RoleProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </RoleProvider>
    </Provider>
  </>,
);
