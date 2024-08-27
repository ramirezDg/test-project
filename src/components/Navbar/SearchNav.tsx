import { Languages, Moon, Search, Sun } from 'lucide-react'
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
import { useTheme } from '../ThemeProvider'
import { useLanguageStore } from '../../store/lenguageStore'
import i18n from '../../lib/i18n'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from '../../store/authStore'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useEcommerceStore } from '../../store/ecommerceStore'
import { useMemo } from 'react'

export default function SearchBar() {
  const { t } = useTranslation()
  const { setTheme } = useTheme()
  const theme = useEcommerceStore(state => state.theme)
  const { setLanguage } = useLanguageStore()
  const clearToken = useAuthStore(state => state.clearToken)

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    setLanguage(language)
  }

  const invertColor = useMemo(() => {
    return theme === 'dark' ? 'invert' : ''
  }, [theme])

  return (
    <>
      <div className='relative flex-1 ml-auto md:grow-0'>
        <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
        <Input
          type='search'
          placeholder={`${t('search')}`}
          className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]'
        />
      </div>
      {/* Language */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='overflow-hidden rounded-full'
          >
            <Languages className='w-5 h-5 text-muted-foreground' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => changeLanguage('es')}>
            {t('spanish')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('en')}>
            {t('english')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Theme */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='overflow-hidden rounded-full text-muted-foreground'
          >
            <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>{t('theme')}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => setTheme('light')}>
            {t('light')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            {t('dark')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            {t('system')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Avatar */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='overflow-hidden rounded-full'
          >
            <Avatar>
              <AvatarImage src='/logo.png' className={`p-2 ${invertColor}`} />
              <AvatarFallback>UK</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>{t('my_account')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{t('settings')}</DropdownMenuItem>
          <DropdownMenuItem>{t('support')}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              clearToken()
              localStorage.removeItem('token')
              window.location.reload()
            }}
          >
            {t('logout')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
