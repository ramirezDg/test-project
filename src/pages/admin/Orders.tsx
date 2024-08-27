import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  ListFilter,
  MoreVertical,
  Truck,
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
/* import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet' */
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
import { Separator } from '@radix-ui/react-dropdown-menu'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '../../components/ui/pagination'
import { useTranslation } from 'react-i18next'

export default function Orders() {
  const { t } = useTranslation()
  return (
    <main className='grid items-start flex-1 gap-4 p-4 mt-6 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'>
      <div className='grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2'>
        {/*   <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4'>
          <Card className='sm:col-span-2' x-chunk='dashboard-05-chunk-0'>
            <CardHeader className='pb-3'>
              <CardTitle>{t('your_orders')}</CardTitle>
              <CardDescription className='max-w-lg leading-relaxed text-balance'>
                {t(
                  'introducing_our_dynamic_orders_dashboard_for_seamless_management_and_insightful_analysis',
                )}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>{t('create_new_order')}</Button>
            </CardFooter>
          </Card>
          <Card x-chunk='dashboard-05-chunk-1'>
            <CardHeader className='pb-2'>
              <CardDescription>{t('this_week')}</CardDescription>
              <CardTitle className='text-4xl'>$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-xs text-muted-foreground'>
                +25% {t('from_last_week')}
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label='25% increase' />
            </CardFooter>
          </Card>
          <Card x-chunk='dashboard-05-chunk-2'>
            <CardHeader className='pb-2'>
              <CardDescription>{t('this_month')}</CardDescription>
              <CardTitle className='text-4xl'>$5,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-xs text-muted-foreground'>
                +10% {t('from_last_month')}
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={12} aria-label='12% increase' />
            </CardFooter>
          </Card>
        </div> */}
        <Tabs defaultValue='week'>
          <div className='flex items-center'>
            <TabsList>
              <TabsTrigger value='week'>{t('week')}</TabsTrigger>
              <TabsTrigger value='month'>{t('month')}</TabsTrigger>
              <TabsTrigger value='year'>{t('year')}</TabsTrigger>
            </TabsList>
            <div className='flex items-center gap-2 ml-auto'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='outline'
                    size='sm'
                    className='gap-1 text-sm h-7'
                  >
                    <ListFilter className='h-3.5 w-3.5' />
                    <span className='sr-only sm:not-sr-only'>
                      {t('filter')}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuLabel>{t('filter_by')}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    {t('fulfilled')}
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    {t('declined')}
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    {t('refunded')}
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size='sm' variant='outline' className='gap-1 text-sm h-7'>
                <File className='h-3.5 w-3.5' />
                <span className='sr-only sm:not-sr-only'>{t('export')}</span>
              </Button>
            </div>
          </div>
          <TabsContent value='week'>
            <Card x-chunk='dashboard-05-chunk-3'>
              <CardHeader className='px-7'>
                <CardTitle>{t('orders')}</CardTitle>
                <CardDescription>
                  {t('recent_orders_from_your_store')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('customer')}</TableHead>
                      <TableHead className='hidden sm:table-cell'>
                        {t('type')}
                      </TableHead>
                      <TableHead className='hidden sm:table-cell'>
                        {t('status')}
                      </TableHead>
                      <TableHead className='hidden md:table-cell'>
                        {t('date')}
                      </TableHead>
                      <TableHead className='text-right'>
                        {t('amount')}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className='bg-accent'>
                      <TableCell>
                        <div className='font-medium'>Liam Johnson</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        Sale
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        <Badge className='text-xs' variant='secondary'>
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-06-23
                      </TableCell>
                      <TableCell className='text-right'>$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Olivia Smith</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          olivia@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        Refund
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        <Badge className='text-xs' variant='outline'>
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-06-24
                      </TableCell>
                      <TableCell className='text-right'>$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Noah Williams</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          noah@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        Subscription
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        <Badge className='text-xs' variant='secondary'>
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-06-25
                      </TableCell>
                      <TableCell className='text-right'>$350.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Emma Brown</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          emma@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        Sale
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        <Badge className='text-xs' variant='secondary'>
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-06-26
                      </TableCell>
                      <TableCell className='text-right'>$450.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Liam Johnson</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        Sale
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        <Badge className='text-xs' variant='secondary'>
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-06-23
                      </TableCell>
                      <TableCell className='text-right'>$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Liam Johnson</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        Sale
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        <Badge className='text-xs' variant='secondary'>
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-06-23
                      </TableCell>
                      <TableCell className='text-right'>$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Olivia Smith</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          olivia@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        Refund
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        <Badge className='text-xs' variant='outline'>
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-06-24
                      </TableCell>
                      <TableCell className='text-right'>$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className='font-medium'>Emma Brown</div>
                        <div className='hidden text-sm text-muted-foreground md:inline'>
                          emma@example.com
                        </div>
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        Sale
                      </TableCell>
                      <TableCell className='hidden sm:table-cell'>
                        <Badge className='text-xs' variant='secondary'>
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        2023-06-26
                      </TableCell>
                      <TableCell className='text-right'>$450.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <Card className='overflow-hidden' x-chunk='dashboard-05-chunk-4'>
          <CardHeader className='flex flex-row items-start bg-muted/50'>
            <div className='grid gap-0.5'>
              <CardTitle className='flex items-center gap-2 text-lg group'>
                {t('order')} Oe31b70H
                <Button
                  size='icon'
                  variant='outline'
                  className='w-6 h-6 transition-opacity opacity-0 group-hover:opacity-100'
                >
                  <Copy className='w-3 h-3' />
                  <span className='sr-only'>{t('copy_order_id')}</span>
                </Button>
              </CardTitle>
              <CardDescription>{t('date')}: November 23, 2023</CardDescription>
            </div>
            <div className='flex items-center gap-1 ml-auto'>
              <Button size='sm' variant='outline' className='h-8 gap-1'>
                <Truck className='h-3.5 w-3.5' />
                <span className='lg:sr-only xl:not-sr-only xl:whitespace-nowrap'>
                  {t('track_order')}
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size='icon' variant='outline' className='w-8 h-8'>
                    <MoreVertical className='h-3.5 w-3.5' />
                    <span className='sr-only'>{t('more')}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem>{t('edit')}</DropdownMenuItem>
                  <DropdownMenuItem>{t('export')}</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>{t('trash')}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className='p-6 text-sm'>
            <div className='grid gap-3'>
              <div className='font-semibold'>{t('order_details')}</div>
              <ul className='grid gap-3'>
                <li className='flex items-center justify-between'>
                  <span className='text-muted-foreground'>
                    Glimmer Lamps x <span>2</span>
                  </span>
                  <span>$250.00</span>
                </li>
                <li className='flex items-center justify-between'>
                  <span className='text-muted-foreground'>
                    Aqua Filters x <span>1</span>
                  </span>
                  <span>$49.00</span>
                </li>
              </ul>
              <Separator className='my-2' />
              <ul className='grid gap-3'>
                <li className='flex items-center justify-between'>
                  <span className='text-muted-foreground'>{t('subtotal')}</span>
                  <span>$299.00</span>
                </li>
                <li className='flex items-center justify-between'>
                  <span className='text-muted-foreground'>{t('shipping')}</span>
                  <span>$5.00</span>
                </li>
                <li className='flex items-center justify-between'>
                  <span className='text-muted-foreground'>{t('tax')}</span>
                  <span>$25.00</span>
                </li>
                <li className='flex items-center justify-between font-semibold'>
                  <span className='text-muted-foreground'>{t('total')}</span>
                  <span>$329.00</span>
                </li>
              </ul>
            </div>
            <Separator className='my-4' />
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-3'>
                <div className='font-semibold'>{t('shipping_information')}</div>
                <address className='grid gap-0.5 not-italic text-muted-foreground'>
                  <span>Liam Johnson</span>
                  <span>1234 Main St.</span>
                  <span>Anytown, CA 12345</span>
                </address>
              </div>
              <div className='grid gap-3 auto-rows-max'>
                <div className='font-semibold'>{t('billing_information')}</div>
                <div className='text-muted-foreground'>
                  {t('same_as_shipping_address')}
                </div>
              </div>
            </div>
            <Separator className='my-4' />
            <div className='grid gap-3'>
              <div className='font-semibold'>{t('customer_information')}</div>
              <dl className='grid gap-3'>
                <div className='flex items-center justify-between'>
                  <dt className='text-muted-foreground'>{t('customer')}</dt>
                  <dd>Liam Johnson</dd>
                </div>
                <div className='flex items-center justify-between'>
                  <dt className='text-muted-foreground'>{t('email')}</dt>
                  <dd>
                    <a href='mailto:'>liam@acme.com</a>
                  </dd>
                </div>
                <div className='flex items-center justify-between'>
                  <dt className='text-muted-foreground'>{t('phone')}</dt>
                  <dd>
                    <a href='tel:'>+1 234 567 890</a>
                  </dd>
                </div>
              </dl>
            </div>
            <Separator className='my-4' />
            <div className='grid gap-3'>
              <div className='font-semibold'>{t('payment_information')}</div>
              <dl className='grid gap-3'>
                <div className='flex items-center justify-between'>
                  <dt className='flex items-center gap-1 text-muted-foreground'>
                    <CreditCard className='w-4 h-4' />
                    Visa
                  </dt>
                  <dd>**** **** **** 4532</dd>
                </div>
              </dl>
            </div>
          </CardContent>
          <CardFooter className='flex flex-row items-center px-6 py-3 border-t bg-muted/50'>
            <div className='text-xs text-muted-foreground'>
              {t('update')} <time dateTime='2023-11-23'>November 23, 2023</time>
            </div>
            <Pagination className='w-auto ml-auto mr-0'>
              <PaginationContent>
                <PaginationItem>
                  <Button size='icon' variant='outline' className='w-6 h-6'>
                    <ChevronLeft className='h-3.5 w-3.5' />
                    <span className='sr-only'>{t('previous_order')}</span>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button size='icon' variant='outline' className='w-6 h-6'>
                    <ChevronRight className='h-3.5 w-3.5' />
                    <span className='sr-only'>{t('next_order')}</span>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
