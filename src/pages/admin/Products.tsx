import {
  File,
  ListFilter,
  MoreHorizontal,
  Package,
  PlusCircle,
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

export default function Products() {
  const { t } = useTranslation()

  return (
    <main className='grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
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
                {t('add_product')}
              </span>
            </Button>
          </div>
        </div>
        <TabsContent value='all'>
          <Card x-chunk='dashboard-06-chunk-0'>
            <CardHeader>
              <CardTitle>{t('products')}</CardTitle>
              <CardDescription>
                {t('manage_your_products_and_view_their_sales_performance')}{' '}
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
                    <TableHead>{t('status')}</TableHead>
                    <TableHead className='hidden md:table-cell'>
                      {t('price')}
                    </TableHead>
                    <TableHead className='hidden md:table-cell'>
                      {t('total_sales')}
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
                  <TableRow>
                    <TableCell className='hidden sm:table-cell'>
                      <Package className='object-cover w-10 h-10 rounded-md text-muted-foreground' />
                    </TableCell>
                    <TableCell className='font-medium'>
                      Laser Lemonade Machine
                    </TableCell>
                    <TableCell>
                      <Badge variant='outline'>Draft</Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      $499.99
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>25</TableCell>
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
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='hidden sm:table-cell'>
                      <Package className='object-cover w-10 h-10 rounded-md text-muted-foreground' />
                    </TableCell>
                    <TableCell className='font-medium'>
                      Hypernova Headphones
                    </TableCell>
                    <TableCell>
                      <Badge variant='outline'>Active</Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      $129.99
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>100</TableCell>
                    <TableCell className='hidden md:table-cell'>
                      2023-10-18 03:21 PM
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
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='hidden sm:table-cell'>
                      <Package className='object-cover w-10 h-10 rounded-md text-muted-foreground' />
                    </TableCell>
                    <TableCell className='font-medium'>
                      AeroGlow Desk Lamp
                    </TableCell>
                    <TableCell>
                      <Badge variant='outline'>Active</Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      $39.99
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>50</TableCell>
                    <TableCell className='hidden md:table-cell'>
                      2023-11-29 08:15 AM
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
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='hidden sm:table-cell'>
                      <Package className='object-cover w-10 h-10 rounded-md text-muted-foreground' />
                    </TableCell>
                    <TableCell className='font-medium'>
                      TechTonic Energy Drink
                    </TableCell>
                    <TableCell>
                      <Badge variant='secondary'>Draft</Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      $2.99
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>0</TableCell>
                    <TableCell className='hidden md:table-cell'>
                      2023-12-25 11:59 PM
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
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='hidden sm:table-cell'>
                      <Package className='object-cover w-10 h-10 rounded-md text-muted-foreground' />
                    </TableCell>
                    <TableCell className='font-medium'>
                      Gamer Gear Pro Controller
                    </TableCell>
                    <TableCell>
                      <Badge variant='outline'>Active</Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      $59.99
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>75</TableCell>
                    <TableCell className='hidden md:table-cell'>
                      2024-01-01 12:00 AM
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
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='hidden sm:table-cell'>
                      <Package className='object-cover w-10 h-10 rounded-md text-muted-foreground' />
                    </TableCell>
                    <TableCell className='font-medium'>
                      Luminous VR Headset
                    </TableCell>
                    <TableCell>
                      <Badge variant='outline'>Active</Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>
                      $199.99
                    </TableCell>
                    <TableCell className='hidden md:table-cell'>30</TableCell>
                    <TableCell className='hidden md:table-cell'>
                      2024-02-14 02:14 PM
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
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className='text-xs text-muted-foreground'>
                {t('showing')} <strong>1-10</strong> {t('of')}{' '}
                <strong>32</strong> {t('products_min')}
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
