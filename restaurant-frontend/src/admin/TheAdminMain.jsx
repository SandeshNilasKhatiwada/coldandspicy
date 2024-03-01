import React from "react";
import { Route, Routes } from "react-router-dom";
import TheAdminSidebar from "./admin-components/TheAdminSidebar";
import TheAdminDashboard from "./admin-pages/TheAdminDashboard";
import TheAdminAnalytics from "./admin-pages/TheAdminAnalytics";
import TheAdminPayments from "./admin-pages/TheAdminPayments";
import TheAdminProducts from "./admin-pages/TheAdminProducts";
import TheAdminOrders from "./admin-pages/TheAdminOrders";
import TheAdminUsers from "./admin-pages/TheAdminUsers";
import TheAdminMarketing from "./admin-pages/TheAdminMarketing";
import TheAdminSetting from "./admin-pages/TheAdminSetting";
import TheAdminLogout from "./admin-pages/TheAdminLogout";
import "./admin-components/TheAdminSidebar.css";
import TheAdminNavbar from "./admin-components/TheAdminNavbar";

function TheAdminMain() {
  const routes = [
    { path: "/admin-dashboard", element: <TheAdminDashboard /> },
    { path: "/admin-analytics", element: <TheAdminAnalytics /> },
    { path: "/admin-payments", element: <TheAdminPayments /> },
    { path: "/admin-products", element: <TheAdminProducts /> },
    { path: "/admin-orders", element: <TheAdminOrders /> },
    { path: "/admin-users", element: <TheAdminUsers /> },
    { path: "/admin-marketing", element: <TheAdminMarketing /> },
    { path: "/admin-setting", element: <TheAdminSetting /> },
    { path: "/admin-logout", element: <TheAdminLogout /> },
  ];

  return (
    <div className="flex">
      <div className="mb-5 z-50 ml-5">
        <TheAdminSidebar />
      </div>
      <div className="h-[100vh] border-l w-full">
        <div className="border-b p-2">
        <TheAdminNavbar />
        </div>
        <div className="pl-5 h-[92vh] custom-scroll">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default TheAdminMain;
