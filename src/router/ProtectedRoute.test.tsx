import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import { RoleProvider } from "../auth/RoleContext"
import { ThemeProvider } from "../ui/themeContext"



test("redirects non-admin user to home", () => {
  render(
    <ThemeProvider>
    <RoleProvider>
    <MemoryRouter initialEntries={["/dashboard"]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </MemoryRouter>
    </RoleProvider>
    </ThemeProvider>
  )

  expect(screen.getByText("Home Page")).toBeInTheDocument()
})
