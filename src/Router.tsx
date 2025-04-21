import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./layouts/Public";
import CustomerLayout from "./layouts/Customer";
import AdministratorLayout from "./layouts/Administrator";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

import DashboardOrders from "./pages/Dashboard.orders";
import DashboardSales from "./pages/Dashboard.sales";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/console" element={<CustomerLayout />}>
          <Route index element={<DashboardOrders />} />
        </Route>

        <Route path="/admin" element={<AdministratorLayout />}>
          <Route index element={<DashboardSales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
