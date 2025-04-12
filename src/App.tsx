import { Routes, Route } from 'react-router'
import { Landing } from './landing/Landing'
import { Dashboard } from './dashboard/Dashboard'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}
