import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PlusCircle, MoreHorizontal, ListFilter, File } from 'lucide-react'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../../components/ui/button'
import { DropdownMenu } from '../../components/ui/dropdown-menu'
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs'
import FormDialog from '../../components/FormDialog'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import { DataTable } from '../../components/ui/data-table'
import { Ticket } from 'lucide-react'

interface Event {
  name: string
  description: string
  startDate: string
  endDate: string
  spot: string
  area: string
}

export default function Spots() {
  const { t } = useTranslation()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = () => {
    console.log('Form submitted')
    setIsDialogOpen(false)
    setIsEditing(false)
  }

  const handleAddEvent = () => {
    setIsEditing(false)
    setIsDialogOpen(true)
  }

  const handleEditEvent = () => {
    setIsEditing(true)
    setIsDialogOpen(true)
  }

  const getTriggerButton = () => {
    return (
      <Button size='sm' className='h-8 gap-1' onClick={handleAddEvent}>
        <PlusCircle className='h-3.5 w-3.5' />
        <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
          {t('add_spot')}
        </span>
      </Button>
    )
  }

  const columns: ColumnDef<Event>[] = [
    {
      accessorKey: 'id',
      header: '',
      cell: () => (
        <Ticket className='object-cover w-10 h-10 rounded-md text-primary' />
      ),
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'description',
      header: 'Description',
    },
    {
      accessorKey: 'startDate',
      header: 'Start Date',
    },
    {
      accessorKey: 'endDate',
      header: 'End Date',
    },
    {
      accessorKey: 'spot',
      header: 'Spot',
    },
    {
      accessorKey: 'area',
      header: 'Area',
    },
    {
      accessorKey: 'actions',
      header: 'Actions',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup='true' size='icon' variant='ghost'>
              <MoreHorizontal className='w-4 h-4' />
              <span className='sr-only'>{t('toggle_menu')}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>{t('actions')}</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleEditEvent}>
              {t('edit')}
            </DropdownMenuItem>
            <DropdownMenuItem>{t('delete')}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ]

  const data: Event[] = [
    {
      name: 'Event 1',
      description: 'Description 1',
      startDate: '2023-10-01',
      endDate: '2023-10-02',
      spot: 'Spot 1',
      area: 'Area 1',
    },
    // Agrega más eventos según sea necesario
  ]

  const dialogTitle = useMemo(() => {
    return isEditing ? t('edit_spot') : t('add_spot')
  }, [isEditing, t])

  const dialogDescription = useMemo(() => {
    return isEditing ? t('edit_existing_information') : t('add_new_item')
  }, [isEditing, t])

  return (
    <main className='grid items-start flex-1 gap-4 p-4 mt-4 sm:px-6 sm:py-0 md:gap-8'>
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
            <FormDialog
              title={dialogTitle}
              description={dialogDescription}
              trigger={getTriggerButton()}
              isOpen={isDialogOpen}
              onOpenChange={setIsDialogOpen}
              onSubmit={handleSubmit}
            >
              <div className='grid items-center grid-cols-4 gap-4'>
                <Label htmlFor='name' className='text-right'>
                  {t('name')}
                </Label>
                <Input id='name' defaultValue='' className='col-span-3' />
              </div>
              <div className='grid items-center grid-cols-4 gap-4'>
                <Label htmlFor='date' className='text-right'>
                  {t('date')}
                </Label>
                <Input id='date' defaultValue='' className='col-span-3' />
              </div>
              <div className='grid items-center grid-cols-4 gap-4'>
                <Label htmlFor='location' className='text-right'>
                  {t('location')}
                </Label>
                <Input id='location' defaultValue='' className='col-span-3' />
              </div>
            </FormDialog>
          </div>
        </div>
        <TabsContent value='all'>
          <Card x-chunk='dashboard-06-chunk-0'>
            <CardHeader>
              <CardTitle>{t('spots')}</CardTitle>
              <CardDescription>
                {t('manage_your_spots_and_view_their_information')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={data} />
            </CardContent>
            {/* <CardFooter className='flex justify-between'>
              <div className='text-xs text-muted-foreground'>
                {t('showing')} <strong>1-10</strong> {t('of')}{' '}
                <strong>32</strong> {t('products_min')}
              </div>
            </CardFooter> */}
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
