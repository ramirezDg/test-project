import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
  SquareUser,
} from 'lucide-react'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs'
import { useTranslation } from 'react-i18next'
import { useUsers } from '../../hooks/useUsers'
import { useEffect } from 'react'

export default function Customers() {
  const { t } = useTranslation()
  const { users, getUsersData } = useUsers()

  useEffect(() => {
    getUsersData()
  }, [getUsersData])

  /* useEffect(() => {
    console.log('useEffect usersData', users)
  }, [users]) */

  return (
    <main className='grid items-start flex-1 gap-4 p-4 mt-6 sm:px-6 sm:py-0 md:gap-8'>
      <Tabs defaultValue='all'>
        <div className='flex items-center'>
          <TabsList>
            <TabsTrigger value='all'>{t('all')}</TabsTrigger>
            <TabsTrigger value='active'>{t('active')}</TabsTrigger>
            <TabsTrigger value='draft'>{t('draft')}</TabsTrigger>
            <TabsTrigger value='archived' className='hidden sm:flex'>
              {t('archived')}
            </TabsTrigger>
          </TabsList>
          <div className='flex items-center gap-2 ml-auto'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' size='sm' className='h-8 gap-1'>
                  <ListFilter className='h-3.5 w-3.5' />
                  <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                    {t('filter')}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>{t('filter_by')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  {t('active')}
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  {t('draft')}
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  {t('archived')}
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size='sm' variant='outline' className='h-8 gap-1'>
              <File className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                {t('export')}
              </span>
            </Button>
            <Button size='sm' className='h-8 gap-1'>
              <PlusCircle className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                {t('add_customer')}
              </span>
            </Button>
          </div>
        </div>
        <TabsContent value='all'>
          <Card x-chunk='dashboard-06-chunk-0'>
            <CardHeader>
              <CardTitle>{t('customers')}</CardTitle>
              <CardDescription>
                {t(
                  'manage_your_clients_and_view_statistics_on_your_top_client',
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='hidden w-[100px] sm:table-cell'>
                      <span className='sr-only'>img</span>
                    </TableHead>
                    <TableHead>{t('name')}</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className='hidden md:table-cell'>
                      {t('total_purchased')}
                    </TableHead>
                    <TableHead className='hidden md:table-cell'>
                      {t('purchased_products')}
                    </TableHead>
                    <TableHead className='hidden md:table-cell'>
                      {t('created_at')}
                    </TableHead>
                    <TableHead>
                      <span className='sr-only'>{t('actions')}</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users &&
                    users?.map(user => (
                      <TableRow>
                        <TableCell className='hidden sm:table-cell'>
                          <SquareUser className='object-cover w-10 h-10 rounded-md ' />
                        </TableCell>
                        <TableCell className='font-medium'>
                          {user?.name} {user?.lastname}
                        </TableCell>
                        <TableCell>
                          <Badge variant='outline'>Active</Badge>
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          $499.99
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          25
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          2023-07-12 10:42 AM
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup='true'
                                size='icon'
                                variant='ghost'
                              >
                                <MoreHorizontal className='w-4 h-4' />
                                <span className='sr-only'>Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>
                                {t('actions')}
                              </DropdownMenuLabel>
                              <DropdownMenuItem>
                                {t('promote')}
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                {t('information')}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className='text-xs text-muted-foreground'>
                {t('showing')} <strong>1-10</strong> {t('of')}{' '}
                <strong>32</strong> {t('customers_min')}
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
