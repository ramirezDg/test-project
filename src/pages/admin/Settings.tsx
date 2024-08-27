import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import { Checkbox } from '../../components/ui/checkbox'
import { Input } from '../../components/ui/input'
import { useTranslation } from 'react-i18next'

export default function Settings() {
  const { t } = useTranslation()

  return (
    <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
      <div className='grid w-full max-w-6xl gap-2 mx-auto'>
        <h1 className='text-3xl font-semibold'>{t('settings')}</h1>
      </div>
      <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
        <nav
          className='grid gap-4 text-sm text-muted-foreground'
          x-chunk='dashboard-04-chunk-0'
        >
          <Link to='#' className='font-semibold text-primary'>
            {t('general')}
          </Link>
          <Link to='#'>{t('security')}</Link>
          <Link to='#'>{t('integration')}</Link>
          <Link to='#'>{t('support')}</Link>
          <Link to='#'>{t('organization')}</Link>
          <Link to='#'>{t('advanced')}</Link>
        </nav>
        <div className='grid gap-6'>
          <Card x-chunk='dashboard-04-chunk-1'>
            <CardHeader>
              <CardTitle>{t('store_name')}</CardTitle>
              <CardDescription>
                {t('used_to_identify_your_store_in_the_marketplace')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Input placeholder={`${t('store_name')}`} />
              </form>
            </CardContent>
            <CardFooter className='px-6 py-4 border-t'>
              <Button>{t('save')}</Button>
            </CardFooter>
          </Card>
          <Card x-chunk='dashboard-04-chunk-2'>
            <CardHeader>
              <CardTitle>{t('plugins_directory')}</CardTitle>
              <CardDescription>
                {t(
                  'the_directory_within_your_project_in_which_your_plugins_are_located',
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className='flex flex-col gap-4'>
                <Input
                  placeholder={`${t('plugins_directory')}`}
                  defaultValue='/content/plugins'
                />
                <div className='flex items-center space-x-2'>
                  <Checkbox id='include' defaultChecked />
                  <label
                    htmlFor='include'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    {t('allow_administrators_to_change_the_directory')}
                  </label>
                </div>
              </form>
            </CardContent>
            <CardFooter className='px-6 py-4 border-t'>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
