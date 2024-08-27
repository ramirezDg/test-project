import { Link } from 'react-router-dom'
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  Users,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from '../../components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '../../components/ui/card'
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '../../components/ui/table'
import { Badge } from '../../components/ui/badge'
import { useTranslation } from 'react-i18next'

export default function Dashboard() {
  const { t } = useTranslation()

  return (
    <main className='flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8'>
      <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
        {/* Phone View */}
        {/* <LayoutSheet /> */}
        <Card x-chunk='dashboard-01-chunk-0'>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>
              {t('total_revenue')}
            </CardTitle>
            <DollarSign className='w-4 h-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>$45,231.89</div>
            <p className='text-xs text-muted-foreground'>
              +20.1% {t('from_last_month')}
            </p>
          </CardContent>
        </Card>
        <Card x-chunk='dashboard-01-chunk-1'>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>
              {t('subscriptions')}
            </CardTitle>
            <Users className='w-4 h-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+2350</div>
            <p className='text-xs text-muted-foreground'>
              +180.1% {t('from_last_month')}
            </p>
          </CardContent>
        </Card>
        <Card x-chunk='dashboard-01-chunk-2'>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>{t('sales')}</CardTitle>
            <CreditCard className='w-4 h-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+12,234</div>
            <p className='text-xs text-muted-foreground'>
              +19% {t('from_last_month')}
            </p>
          </CardContent>
        </Card>
        <Card x-chunk='dashboard-01-chunk-3'>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>
              {t('active_now')}
            </CardTitle>
            <Activity className='w-4 h-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+573</div>
            <p className='text-xs text-muted-foreground'>
              +201 {t('since_last_hour')}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        <Card className='xl:col-span-2' x-chunk='dashboard-01-chunk-4'>
          <CardHeader className='flex flex-row items-center'>
            <div className='grid gap-2'>
              <CardTitle>{t('transactions')}</CardTitle>
              <CardDescription>
                {t('recent_transactions_from_your_store')}
              </CardDescription>
            </div>
            <Button asChild size='sm' className='gap-1 ml-auto'>
              <Link to='#'>
                {t('view_all')}
                <ArrowUpRight className='w-4 h-4' />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('customers')}</TableHead>
                  <TableHead className='hidden xl:table-column'>
                    {t('type')}
                  </TableHead>
                  <TableHead className='hidden xl:table-column'>
                    {t('status')}
                  </TableHead>
                  <TableHead className='hidden xl:table-column'>
                    {t('date')}
                  </TableHead>
                  <TableHead className='text-right'>{t('amount')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className='font-medium'>Liam Johnson</div>
                    <div className='hidden text-sm text-muted-foreground md:inline'>
                      liam..example.com
                    </div>
                  </TableCell>
                  <TableCell className='hidden xl:table-column'>Sale</TableCell>
                  <TableCell className='hidden xl:table-column'>
                    <Badge className='text-xs' variant='outline'>
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                    2023-06-23
                  </TableCell>
                  <TableCell className='text-right'>$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className='font-medium'>Olivia Smith</div>
                    <div className='hidden text-sm text-muted-foreground md:inline'>
                      olivia..example.com
                    </div>
                  </TableCell>
                  <TableCell className='hidden xl:table-column'>
                    Refund
                  </TableCell>
                  <TableCell className='hidden xl:table-column'>
                    <Badge className='text-xs' variant='outline'>
                      Declined
                    </Badge>
                  </TableCell>
                  <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                    2023-06-24
                  </TableCell>
                  <TableCell className='text-right'>$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className='font-medium'>Noah Williams</div>
                    <div className='hidden text-sm text-muted-foreground md:inline'>
                      noah..example.com
                    </div>
                  </TableCell>
                  <TableCell className='hidden xl:table-column'>
                    Subscription
                  </TableCell>
                  <TableCell className='hidden xl:table-column'>
                    <Badge className='text-xs' variant='outline'>
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                    2023-06-25
                  </TableCell>
                  <TableCell className='text-right'>$350.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className='font-medium'>Emma Brown</div>
                    <div className='hidden text-sm text-muted-foreground md:inline'>
                      emma..example.com
                    </div>
                  </TableCell>
                  <TableCell className='hidden xl:table-column'>Sale</TableCell>
                  <TableCell className='hidden xl:table-column'>
                    <Badge className='text-xs' variant='outline'>
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                    2023-06-26
                  </TableCell>
                  <TableCell className='text-right'>$450.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className='font-medium'>Liam Johnson</div>
                    <div className='hidden text-sm text-muted-foreground md:inline'>
                      liam..example.com
                    </div>
                  </TableCell>
                  <TableCell className='hidden xl:table-column'>Sale</TableCell>
                  <TableCell className='hidden xl:table-column'>
                    <Badge className='text-xs' variant='outline'>
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                    2023-06-27
                  </TableCell>
                  <TableCell className='text-right'>$550.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card x-chunk='dashboard-01-chunk-5'>
          <CardHeader>
            <CardTitle>{t('recent_sales')}</CardTitle>
          </CardHeader>
          <CardContent className='grid gap-8'>
            <div className='flex items-center gap-4'>
              <Avatar className='hidden h-9 w-9 sm:flex'>
                <AvatarImage src='/avatars/01.png' alt='Avatar' />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium leading-none'>
                  Olivia Martin
                </p>
                <p className='text-sm text-muted-foreground'>
                  olivia.martin..email.com
                </p>
              </div>
              <div className='ml-auto font-medium'>+$1,999.00</div>
            </div>
            <div className='flex items-center gap-4'>
              <Avatar className='hidden h-9 w-9 sm:flex'>
                <AvatarImage src='/avatars/02.png' alt='Avatar' />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium leading-none'>Jackson Lee</p>
                <p className='text-sm text-muted-foreground'>
                  jackson.lee..email.com
                </p>
              </div>
              <div className='ml-auto font-medium'>+$39.00</div>
            </div>
            <div className='flex items-center gap-4'>
              <Avatar className='hidden h-9 w-9 sm:flex'>
                <AvatarImage src='/avatars/03.png' alt='Avatar' />
                <AvatarFallback>IN</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium leading-none'>
                  Isabella Nguyen
                </p>
                <p className='text-sm text-muted-foreground'>
                  isabella.nguyen..email.com
                </p>
              </div>
              <div className='ml-auto font-medium'>+$299.00</div>
            </div>
            <div className='flex items-center gap-4'>
              <Avatar className='hidden h-9 w-9 sm:flex'>
                <AvatarImage src='/avatars/04.png' alt='Avatar' />
                <AvatarFallback>WK</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium leading-none'>William Kim</p>
                <p className='text-sm text-muted-foreground'>will..email.com</p>
              </div>
              <div className='ml-auto font-medium'>+$99.00</div>
            </div>
            <div className='flex items-center gap-4'>
              <Avatar className='hidden h-9 w-9 sm:flex'>
                <AvatarImage src='/avatars/05.png' alt='Avatar' />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium leading-none'>Sofia Davis</p>
                <p className='text-sm text-muted-foreground'>
                  sofia.davis..email.com
                </p>
              </div>
              <div className='ml-auto font-medium'>+$39.00</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
