import React from 'react';
import { Route } from 'react-router-dom';
import DashboardHome from '../pages/Dashboard/Home';
import DashboardSettings from '../pages/Dashboard/Settings';

function DashboardRoutes() {
  return (
    <>
      <Route path="/dashboard" element={<DashboardHome />} />
      <Route path="/dashboard/settings" element={<DashboardSettings />} />
    </>
  );
}

export default DashboardRoutes;