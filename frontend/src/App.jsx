import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Dashboard from './pages/Home/Dashboard'
import { ThemeProvider } from './layouts/context/LayoutContext';
import Setting from './pages/Home/Setting';
import PrivateRoute from './routers/PrivateRoute';
import GuestRoute from './routers/GuestRoute';
import Error from './pages/Error';
import Analytics from './pages/Home/Analytics';
import Customers from './pages/Home/Customers';
import Inventory from './pages/Home/Inventory';
import NewProduct from './pages/Home/NewProduct';
import VerifiedCustomers from './pages/Home/VerifiedCustomers';
import Products from './pages/Home/Products';
import Reports from './pages/Home/Reports';
import NewCustomer from './pages/Home/NewCustomer';

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
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/new-product" element={<NewProduct />} />
                <Route path="/new-customer" element={<NewCustomer />} />
                <Route path="/verified-customers" element={<VerifiedCustomers />} />
                <Route path="/products" element={<Products />} />
                <Route path="reports" element={<Reports />} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </Router>
      </ThemeProvider>
  )
}

export default App