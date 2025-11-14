import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Dashboard from './pages/Home/Dashboard'
import { ThemeProvider } from './layouts/context/LayoutContext';
import Setting from './pages/Home/Setting';
import PrivateRoute from './routers/PrivateRoute';
import GuestRoute from './routers/GuestRoute';

const App = () => {
  return (
      <ThemeProvider storageKey="theme">
          <Router>
            <Routes>
              <Route element={<GuestRoute />}>
                <Route path="/auth/login" element={<Login />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Setting />} />
              </Route>
            </Routes>
          </Router>
      </ThemeProvider>
  )
}

export default App