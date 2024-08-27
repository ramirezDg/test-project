import { ColumnDef } from '@tanstack/react-table'

import { Event } from '../../types/events'
import { Spot } from '../../types/sites'
// Definición de las columnas para la tabla de visitantes
export const visitorColumns: ColumnDef<unknown>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
  },
]

// Definición de las columnas para la tabla de lugares
export const spotColumns: ColumnDef<Spot>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
  },
]

// Definición de las columnas para la tabla de miembros
export const memberColumns: ColumnDef<unknown>[] = [
  {
    accessorKey: 'img',
    header: 'Img',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
  },
]

export const eventColumns: ColumnDef<Event>[] = [
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
  },
]

// Definición de las columnas para la tabla de congregaciones
export const congregationColumns: ColumnDef<unknown>[] = [
  {
    accessorKey: 'img',
    header: 'Img',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'location',
    header: 'Location',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
  },
]

// Definición de las columnas para la tabla de áreas
export const areaColumns: ColumnDef<unknown>[] = [
  {
    accessorKey: 'img',
    header: 'Img',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
  },
]

// Definición de las columnas para la tabla de administradores
export const administratorColumns: ColumnDef<unknown>[] = [
  {
    accessorKey: 'img',
    header: 'Img',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'areas',
    header: 'Areas',
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
  },
]
