import { useEffect, useState } from 'react'
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import PageTitle from './components/PageTitle'
import Dashboard from './pages/bashboard/index'
import Login from './pages/auth/Login'
import { Toaster } from 'sonner'
import { Progress } from './components/ui/progress'
import { STORE_NAME } from './constants/constants'
import ProtectedRoute from './routes/ProtectedRoute'
import AuthProvider from './pages/auth/components/AuthProvider'
import { useAuthStore } from './store/authStore'
import { setNavigate } from './lib/navigationHelper'
import Events from './pages/administration/Events'
import Spots from './pages/administration/Spots'
import Areas from './pages/administration/Areas'
import Members from './pages/administration/Members'
import Congregation from './pages/administration/Congregation'
import Administrators from './pages/administration/Administrators'
import Visitor from './pages/administration/Visitor'

function App() {
  const token = useAuthStore(state => state.token)
  const [loading, setLoading] = useState<boolean>(true)

  const navigate = useNavigate()

  useEffect(() => {
    setNavigate(navigate)
  }, [navigate])

  useEffect(() => {
    setTimeout(() => setLoading(false), 600)
  }, [])

  const [progress, setProgress] = useState(17)

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(17), 62.5) // Cambia a 17 después de 62.5ms
    const timer2 = setTimeout(() => setProgress(34), 125) // Cambia a 34 después de 125ms adicionales
    const timer3 = setTimeout(() => setProgress(66), 187.5) // Cambia a 66 después de 187.5ms adicionales
    const timer4 = setTimeout(() => setProgress(89), 250) // Cambia a 89 después de 250ms adicionales
    const timer5 = setTimeout(() => setProgress(100), 312.5) // Cambia a 100 después de 312.5ms adicionales

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [])

  const PROJECT_NAME = STORE_NAME

  return loading ? (
    <div className='flex items-center justify-center h-screen'>
      <Progress
        value={progress}
        className='w-[60%] transition-none animate-in'
      />
    </div>
  ) : (
    <Routes>
      {/* Rutas Privadas */}
      <Route
        element={
          <>
            <AuthProvider isSignedIn={!!token}>
              <ProtectedRoute>
                <AuthLayout />
              </ProtectedRoute>
            </AuthProvider>
          </>
        }
      >
        <Route
          path='/'
          element={
            <>
              <PageTitle title={`Dashboard | ${PROJECT_NAME}`} />
              <Dashboard />
            </>
          }
        />
        {/* Administratios Routes */}
        <Route
          path='/administration'
          element={<Navigate to='/administration/events' replace />}
        />
        <Route
          path='/administration/events'
          element={
            <>
              <PageTitle title={`Eventos | ${PROJECT_NAME}`} />
              <Events />
            </>
          }
        />
        <Route
          path='/administration/spots'
          element={
            <>
              <PageTitle title={`Spots | ${PROJECT_NAME}`} />
              <Spots />
            </>
          }
        />
        <Route
          path='/administration/areas'
          element={
            <>
              <PageTitle title={`Areas | ${PROJECT_NAME}`} />
              <Areas />
            </>
          }
        />
        <Route
          path='/administration/members'
          element={
            <>
              <PageTitle title={`Members | ${PROJECT_NAME}`} />
              <Members />
            </>
          }
        />
        <Route
          path='/administration/congregation'
          element={
            <>
              <PageTitle title={`Congregation | ${PROJECT_NAME}`} />
              <Congregation />
            </>
          }
        />
        <Route
          path='/administration/administrators'
          element={
            <>
              <PageTitle title={`Administrators | ${PROJECT_NAME}`} />
              <Administrators />
            </>
          }
        />
        <Route
          path='/administration/visitor'
          element={
            <>
              <PageTitle title={`Visitor | ${PROJECT_NAME}`} />
              <Visitor />
            </>
          }
        />
        {/*   <Route
          path='/products'
          element={
            <>
              <PageTitle title={`Products | ${PROJECT_NAME}`} />
              <Products />
            </>
          }
        />
        <Route
          path='/products/new-product'
          element={
            <>
              <PageTitle title={`New Product | ${PROJECT_NAME}`} />
              <New />
            </>
          }
        />
        <Route
          path='/products/edit-product'
          element={
            <>
              <PageTitle title={`New Product | ${PROJECT_NAME}`} />
              <Edit />
            </>
          }
        />
        <Route
          path='/customers'
          element={
            <>
              <PageTitle title={`Customers | ${PROJECT_NAME}`} />
              <Customers />
            </>
          }
        />
        <Route
          path='/analytics'
          element={
            <>
              <PageTitle title={`Analytics | ${PROJECT_NAME}`} />
              <Analytics 
              <Charts />
            </>
          }
        />
        <Route
          path='/settings'
          element={
            <>
              <PageTitle title={`Settings | ${PROJECT_NAME}`} />
              <Settings />
            </>
          }
        />
      */}
      </Route>
      {/* Rutas Publicas */}
      <Route
        element={
          <>
            <Toaster richColors closeButton />
            <Outlet />
          </>
        }
      >
        <Route
          path='/sign-in'
          element={
            <>
              <PageTitle title={`Sig In | ${PROJECT_NAME}`} />
              <Login />
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
