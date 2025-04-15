import { Routes, Route } from 'react-router'
import { Landing } from './landing/Landing'
import { Dashboard } from './dashboard/Dashboard'
import { useStoreUserEffect } from './useStoreUserEffect'

export const App = () => {
  useStoreUserEffect();
  return (
    <main className="h-screen">
      <div className="h-full border border-neutral-200 m-4 mb-4 rounded-sm">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </main>
  )
}
