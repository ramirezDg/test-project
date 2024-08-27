import { useEffect, useMemo, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'
import {
  Bell,
  Dot,
  Home,
  LineChart,
  Package,
  ScanEye,
  Settings,
  SlidersHorizontal,
  Users,
} from 'lucide-react'
import { Button } from '../components/ui/button'
import Navbar from '../components/Navbar'
import HistoryNav from '../components/Navbar/HistoryNav'
import SearchBar from '../components/Navbar/SearchNav'
import { t } from 'i18next'
import { STORE_NAME } from '../constants/constants'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/ui/tooltip'

const AuthLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const [pathActual, setPathActual] = useState(location.pathname)

  useEffect(() => {
    setPathActual(location.pathname)
  }, [location])

  const accent = useMemo(() => 'bg-muted text-primary py-2', [])

  const textSrOnly = useMemo(() => (sidebarOpen ? 'sr-only' : ''), [
    sidebarOpen,
  ])

  return (
    <div className='flex flex-col w-full min-h-screen bg-muted/40'>
      <Toaster richColors closeButton theme='system' />
      <div className='min-h-screen font-sans antialiased bg-background'>
        <div
          className={`grid min-h-screen w-full ${
            sidebarOpen
              ? 'md:grid-cols-[70px_1fr] lg:grid-cols-[70px_1fr]'
              : 'md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'
          }`}
        >
          {/* SideBar */}
          <div
            className={`hidden border-r bg-muted/40 md:block
            }`}
          >
            <div className='flex flex-col h-full max-h-screen gap-6'>
              <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
                <Link
                  to='/'
                  className={`flex items-center gap-2 font-semibold `}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <ScanEye className='w-6 h-6' />
                  <span className={textSrOnly}>{STORE_NAME}</span>
                </Link>
                <Button
                  variant='outline'
                  size='icon'
                  className={`w-8 h-8 ml-auto ${sidebarOpen ? 'sr-only' : ''}`}
                >
                  <Bell className='w-4 h-4' />
                  <span className='sr-only'>Toggle notifications</span>
                </Button>
              </div>
              <div className='flex-1 gap-4'>
                <TooltipProvider>
                  <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          to='/'
                          className={`flex items-center gap-3 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                            pathActual === '/' ? accent : 'py-2'
                          }`}
                        >
                          <Home className='w-4 h-4' />
                          <span className={textSrOnly}>{t('dashboard')}</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side='right'>
                        {t('dashboard')}
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          to='/administration'
                          className={`flex items-center gap-3 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                            pathActual === '/administration' ? accent : 'py-2'
                          }`}
                        >
                          {/* <ShoppingCart className='w-4 h-4' /> */}
                          <SlidersHorizontal className='w-4 h-4' />
                          <span className={textSrOnly}>
                            {t('administration')}
                          </span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side='right'>
                        {t('administration')}
                      </TooltipContent>
                    </Tooltip>
                    {/* SubItems */}
                    <div
                      className={`pl-1 transition-all ${
                        location.pathname.includes('/administration')
                          ? ''
                          : 'sr-only'
                      }`}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            to='/administration/events'
                            className={`flex items-center gap-1 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                              pathActual === '/administration/events'
                                ? accent
                                : 'py-2'
                            }`}
                          >
                            <Dot className='w-4 h-4' />
                            <span className='ml-4'>{t('events')}</span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                          {t('events')}
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            to='/administration/spots'
                            className={`flex items-center gap-1 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                              pathActual === '/administration/spots'
                                ? accent
                                : 'py-2'
                            }`}
                          >
                            <Dot className='w-4 h-4' />
                            <span className='ml-4'>{t('spots')}</span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                          {t('spots')}
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            to='/administration/areas'
                            className={`flex items-center gap-1 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                              pathActual === '/administration/areas'
                                ? accent
                                : 'py-2'
                            }`}
                          >
                            <Dot className='w-4 h-4' />
                            <span className='ml-4'>{t('areas')}</span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                          {t('areas')}
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            to='/administration/members'
                            className={`flex items-center gap-1 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                              pathActual === '/administration/members'
                                ? accent
                                : 'py-2'
                            }`}
                          >
                            <Dot className='w-4 h-4' />
                            <span className='ml-4'>{t('members')}</span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                          {t('members')}
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            to='/administration/congregation'
                            className={`flex items-center gap-1 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                              pathActual === '/administration/congregation'
                                ? accent
                                : 'py-2'
                            }`}
                          >
                            <Dot className='w-4 h-4' />
                            <span className='ml-4'>{t('congregation')}</span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                          {t('congregation')}
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            to='/administration/administrators'
                            className={`flex items-center gap-1 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                              pathActual === '/administration/administrators'
                                ? accent
                                : 'py-2'
                            }`}
                          >
                            <Dot className='w-4 h-4' />
                            <span className='ml-4'>{t('administrators')}</span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                          {t('administrators')}
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            to='/administration/visitor'
                            className={`flex items-center gap-1 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                              pathActual === '/administration/visitors'
                                ? accent
                                : 'py-2'
                            }`}
                          >
                            <Dot className='w-4 h-4' />
                            <span className='ml-4'>{t('visitors')}</span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                          {t('administrators')}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          to='/products'
                          className={`flex items-center gap-3 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                            pathActual === '/products' ? accent : 'py-2'
                          }`}
                        >
                          <Package className='w-4 h-4' />
                          <span className={textSrOnly}>{t('products')}</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side='right'>
                        {t('products')}
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          to='/customers'
                          className={`flex items-center gap-3 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                            pathActual === '/customers' ? accent : 'py-2'
                          }`}
                        >
                          <Users className='w-4 h-4' />
                          <span className={textSrOnly}>{t('customers')}</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side='right'>
                        {t('customers')}
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          to='/analytics'
                          className={`flex items-center gap-3 px-3 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                            pathActual === '/analytics' ? accent : 'py-2'
                          }`}
                        >
                          <LineChart className='w-4 h-4' />
                          <span className={textSrOnly}>{t('analytics')}</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side='right'>
                        {t('analytics')}
                      </TooltipContent>
                    </Tooltip>
                  </nav>
                </TooltipProvider>
              </div>
              <div className='pb-4 mt-auto '>
                {/* <Card x-chunk='dashboard-02-chunk-0'>
                  <CardHeader className='p-2 pt-0 md:p-4'>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
                    <Button size='sm' className='w-full'>
                      Upgrade
                    </Button>
                  </CardContent>
                </Card> */}
                <TooltipProvider>
                  <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          to='/settings'
                          className={`flex items-center gap-3 px-3 py-2 transition-all rounded-lg hover:text-primary text-muted-foreground ${
                            pathActual === '/settings' ? accent : ''
                          }`}
                        >
                          <Settings className='w-5 h-5' />
                          <span className={textSrOnly}>{t('settings')}</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side='right'>
                        {t('settings')}
                      </TooltipContent>
                    </Tooltip>
                  </nav>
                </TooltipProvider>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className='flex flex-col'>
            <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
              <Navbar />
              <HistoryNav />
              <SearchBar />
            </header>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
