import { Routes, Route } from 'react-router'
import { Landing } from './landing/Landing'
import { Dashboard } from './dashboard/Dashboard'
import { useStoreUserEffect } from './useStoreUserEffect'

export const App = () => {
  useStoreUserEffect()
  return (
    <main className="h-full">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  )
}
