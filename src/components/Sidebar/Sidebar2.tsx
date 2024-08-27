import { Link } from 'react-router-dom'
import { CircleUser, Package2, Search } from 'lucide-react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Input } from '../ui/input'
import { useTranslation } from 'react-i18next'

export default function Sidebar2() {
  const { t } = useTranslation()

  return (
    <>
      <div className='flex flex-col w-full min-h-screen'>
        <header className='sticky top-0 flex items-center h-16 gap-4 px-4 border-b bg-background md:px-6'>
          <nav className='flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
            <Link
              to='#'
              className='flex items-center gap-2 text-lg font-semibold md:text-base'
            >
              <Package2 className='w-6 h-6' />
              <span className='sr-only'>Acme Inc</span>
            </Link>
            <Link
              to='/'
              className='transition-colors text-muted-foreground hover:text-foreground'
            >
              {t('dashboard')}
            </Link>
            <Link
              to='/orders'
              className='transition-colors text-muted-foreground hover:text-foreground'
            >
              {t('orders')}
            </Link>
            <Link
              to='/products'
              className='transition-colors text-muted-foreground hover:text-foreground'
            >
              {t('products')}
            </Link>
            <Link
              to='#'
              className='transition-colors text-muted-foreground hover:text-foreground'
            >
              {t('customers')}
            </Link>
            <Link
              to='/settings'
              className='transition-colors text-foreground hover:text-foreground'
            >
              {t('settings')}
            </Link>
          </nav>

          <div className='flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4'>
            <form className='flex-1 ml-auto sm:flex-initial'>
              <div className='relative'>
                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type='search'
                  placeholder='Search products...'
                  className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='secondary'
                  size='icon'
                  className='rounded-full'
                >
                  <CircleUser className='w-5 h-5' />
                  <span className='sr-only'>Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>{t('my_account')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{t('settings')}</DropdownMenuItem>
                <DropdownMenuItem>{t('support')}</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{t('logout')}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </div>
    </>
  )
}
