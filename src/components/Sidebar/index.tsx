import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users,
  Users2,
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

export default function SideBar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const { t } = useTranslation()
  const location = useLocation()
  const pathActual = location.pathname

  const accent = 'bg-accent text-accent-foreground'
  return sidebarOpen ? (
    <aside className='fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex'>
      <TooltipProvider>
        <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
          <Link
            to='#'
            className='flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base'
            /* onClick={() => setSidebarOpen(!sidebarOpen)} */
          >
            <Package2 className='w-4 h-4 transition-all group-hover:scale-110' />
            <span className='sr-only'>Acme Inc</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to='/'
                className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8 ${
                  pathActual === '/' ? accent : ''
                }`}
              >
                <Home className='w-5 h-5' />
                <span className='sr-only'>{t('dashboard')}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>{t('dashboard')}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to='/orders'
                className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8 ${
                  pathActual === '/orders' ? accent : ''
                }`}
              >
                <ShoppingCart className='w-5 h-5' />
                <span className='sr-only'>{t('orders')}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>{t('orders')}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to='/products'
                className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8 ${
                  pathActual === '/products' ? accent : ''
                }`}
              >
                <Package className='w-5 h-5' />
                <span className='sr-only'>{t('products')}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>{t('products')}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to='/customers'
                className={`flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8 ${
                  pathActual === '/customers' ? accent : ''
                }`}
              >
                <Users2 className='w-5 h-5' />
                <span className='sr-only'>{t('customers')}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>{t('customers')}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to='/analytics'
                className='flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8'
              >
                <LineChart className='w-5 h-5' />
                <span className='sr-only'>{t('analytics')}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>{t('analytics')}</TooltipContent>
          </Tooltip>
        </nav>
        <nav className='flex flex-col items-center gap-4 px-2 mt-auto sm:py-5'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to='/settings'
                className='flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8'
              >
                <Settings className='w-5 h-5' />
                <span className='sr-only'>{t('settings')}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>{t('settings')}</TooltipContent>
          </Tooltip>
        </nav>
      </TooltipProvider>
    </aside>
  ) : (
    <>
      <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
        <div className='hidden border-r bg-muted/40 md:block'>
          <div className='flex flex-col h-full max-h-screen gap-2'>
            <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
              <Link href='/' className='flex items-center gap-2 font-semibold'>
                <Package2 className='w-6 h-6' />
                <span className=''>Acme Inc</span>
              </Link>
              <Button variant='outline' size='icon' className='w-8 h-8 ml-auto'>
                <Bell className='w-4 h-4' />
                <span className='sr-only'>Toggle notifications</span>
              </Button>
            </div>
            <div className='flex-1'>
              <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
                <Link
                  href='#'
                  className='flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary'
                >
                  <Home className='w-4 h-4' />
                  Dashboard
                </Link>
                <Link
                  href='#'
                  className='flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary'
                >
                  <ShoppingCart className='w-4 h-4' />
                  Orders
                  <Badge className='flex items-center justify-center w-6 h-6 ml-auto rounded-full shrink-0'>
                    6
                  </Badge>
                </Link>
                <Link
                  href='#'
                  className='flex items-center gap-3 px-3 py-2 transition-all rounded-lg bg-muted text-primary hover:text-primary'
                >
                  <Package className='w-4 h-4' />
                  Products{' '}
                </Link>
                <Link
                  href='#'
                  className='flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary'
                >
                  <Users className='w-4 h-4' />
                  Customers
                </Link>
                <Link
                  href='#'
                  className='flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary'
                >
                  <LineChart className='w-4 h-4' />
                  Analytics
                </Link>
              </nav>
            </div>
            <div className='p-4 mt-auto'>
              <Card x-chunk='dashboard-02-chunk-0'>
                <CardHeader className='p-2 pt-0 md:p-4'>
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
                  <Button size='sm' className='w-full'>
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
