import { useEffect, useMemo, useState } from 'react'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
import { useGetEvents } from '../../hooks/useEvents'
import { EventsProps } from '../../services/eventService'

interface Event {
  name: string
  date_start: string
  date_end: string
  spot: string
  area: string
}

export default function Events() {
  const { t } = useTranslation()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedArea, setSelectedArea] = useState('')
  const [data, setData] = useState<EventsProps[]>([])

  const initialState = {
    name: '',
    date_start: '',
    date_end: '',
    spot: '',
    area: '',
  }
  const [formData, setFormData] = useState<Event>(initialState)

  const handleSubmit = () => {
    console.log(formData)
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
      <Button
        size='sm'
        className='h-8 gap-1'
        onClick={() => {
          handleAddEvent
          setFormData(initialState)
          setSelectedArea('')
        }}
      >
        <PlusCircle className='h-3.5 w-3.5' />
        <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
          {t('add_event')}
        </span>
      </Button>
    )
  }

  /* GetData */

  const { events, getEventsData } = useGetEvents()

  useEffect(() => {
    getEventsData()
  }, [getEventsData])

  useEffect(() => {
    if (events) {
      setData(events)
    }
  }, [events])

  const columns: ColumnDef<EventsProps>[] = [
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
      accessorKey: 'date_start',
      header: 'Start Date',
    },
    {
      accessorKey: 'date_end',
      header: 'End Date',
    },
    {
      accessorKey: 'site.name',
      header: 'Spot',
    },
    {
      accessorKey: 'areas',
      header: 'Area',
      cell: ({ row }) => {
        return row.original.areas.map(area => area.name).join(', ')
      },
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
            <DropdownMenuItem
              onClick={() => {
                handleEditEvent()
                setFormData(row.original)
                selectedArea(row.original.spot)
              }}
            >
              {t('edit')}
            </DropdownMenuItem>
            <DropdownMenuItem>{t('delete')}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ]

  const areas = [
    {
      id: 'area1',
      name: 'Area 1',
      eventId: 'event1',
      deletedAt: null,
      sector: {
        id: 1,
        name: 'Sector 1',
        deletedAt: null,
      },
    },
    {
      id: 'area2',
      name: 'Area 2',
      eventId: 'event2',
      deletedAt: '2023-10-01T00:00:00Z',
      sector: {
        id: 2,
        name: 'Sector 2',
        deletedAt: '2023-10-01T00:00:00Z',
      },
    },
    // Agrega más áreas según sea necesario
  ]

  const dialogTitle = useMemo(() => {
    return isEditing ? t('edit_event') : t('add_event')
  }, [isEditing, t])

  const dialogDescription = useMemo(() => {
    return isEditing
      ? t('edit_existing_event_information')
      : t('fill_out_form_to_create_new_event')
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
                <Input
                  id='name'
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className='col-span-3'
                />
              </div>
              <div className='grid items-center grid-cols-4 gap-4'>
                <Label htmlFor='date_start' className='text-right'>
                  {t('date_initial')}
                </Label>

                <Input
                  id='date_start'
                  value={formData.date_start}
                  onChange={e =>
                    setFormData({ ...formData, date_start: e.target.value })
                  }
                  className='col-span-3'
                />
              </div>
              <div className='grid items-center grid-cols-4 gap-4'>
                <Label htmlFor='date_end' className='text-right'>
                  {t('date_end')}
                </Label>
                <Input
                  id='date_end'
                  value={formData.date_end}
                  onChange={e =>
                    setFormData({ ...formData, date_end: e.target.value })
                  }
                  className='col-span-3'
                />
              </div>
              <div className='grid items-center grid-cols-4 gap-4'>
                <Label htmlFor='spot' className='text-right'>
                  {t('spot')}
                </Label>
                <Select
                  value={formData.spot}
                  onValueChange={value => {
                    setSelectedArea(value)
                    setFormData({ ...formData, spot: value })
                  }}
                >
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder={`${t('select')}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map(area => (
                      <SelectItem key={area.id} value={area.id}>
                        {area.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {selectedArea && (
                <div className='grid items-center grid-cols-4 gap-4'>
                  <Label htmlFor='sector' className='text-right'>
                    {t('areas')}
                  </Label>
                  <Select>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder={`${t('select')}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {areas.find(area => area.id === selectedArea)?.sector && (
                        <SelectItem
                          key={
                            areas.find(area => area.id === selectedArea)?.sector
                              .id
                          }
                          value={
                            areas.find(area => area.id === selectedArea)?.sector
                              .id ?? ''
                          }
                        >
                          {
                            areas.find(area => area.id === selectedArea)?.sector
                              .name
                          }
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </FormDialog>
          </div>
        </div>
        <TabsContent value='all'>
          <Card x-chunk='dashboard-06-chunk-0'>
            <CardHeader>
              <CardTitle>{t('events')}</CardTitle>
              <CardDescription>
                {t('manage_your_events_and_view_their_information')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={data} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
