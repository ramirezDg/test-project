export type ID = string | number

export type Email = string

export enum UserRole {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

export enum SaleStatus {
  Pending = 'pending',
  Completed = 'completed',
  Cancelled = 'cancelled',
}

export interface Timestamps {
  createdAt: Date
  updatedAt: Date
}

export type Product = {
  id: ID
  name: string
  description?: string
  price: number
  stock: number
  photoUrl?: string
  categoryId: ID
  supplierId: ID
  labels: Label[]
} & Timestamps

export type Supplier = {
  id: ID
  name: string
  contactInfo?: string
  address?: string
  products: Product[]
} & Timestamps

export type Category = {
  id: ID
  name: string
  description?: string
  products: Product[]
} & Timestamps

export type Sale = {
  id: ID
  userId: ID
  totalAmount: number
  saleDate: Date
  status: SaleStatus
  saleDetails: SaleDetail[]
} & Timestamps

export type SaleDetail = {
  id: ID
  saleId: ID
  productId: ID
  quantity: number
  price: number
  saleDate: Date
}

export type User = {
  uuid: string
  name: string
  lastname: string
  email: Email
  password: string
  role: UserRole
} & Timestamps

export type Label = {
  id: ID
  name: string
  description?: string
  products: Product[]
} & Timestamps

export interface Props {
  email: Email
  pass: string
}

export interface PropsResponseLogin {
  message: string
  error?: string
  statusCode: number
  token?: string
  data?: undefined
  user?: Partial<User>
}


export interface ApiResponseAxios<T> {
  statusCode: number
  message: string
  data: T
}

export interface ApiError {
  status: number;
  message: string;
}
