import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MapPage from './pages/Map'
import DoctorsPage from './pages/Doctors'
import AppointmentsPage from './pages/Appointments'
import RemindersPage from './pages/Reminders'
import SubscriptionsPage from './pages/Subscriptions'
import Documentation from './pages/Documentation'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/reminders" element={<RemindersPage />} />
      <Route path="/subscriptions" element={<SubscriptionsPage />} />
      <Route path="/docs" element={<Documentation />} />
    </Routes>
  )
}
