import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Jan',
    uv: 4000,
    sale: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    sale: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    sale: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    sale: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    sale: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    sale: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    sale: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 4000,
    sale: 2400,
    amt: 2400,
  },
  {
    name: 'Sep',
    uv: 3000,
    sale: 1398,
    amt: 2210,
  },
  {
    name: 'Oct',
    uv: 2000,
    sale: 9800,
    amt: 2290,
  },
  {
    name: 'Nov',
    uv: 2780,
    sale: 3908,
    amt: 2000,
  },
  {
    name: 'Dec',
    uv: 1890,
    sale: 4800,
    amt: 2181,
  },
]

type MonthLabel =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec'

const getIntroOfPage = (label: MonthLabel): string => {
  switch (label) {
    case 'Jan':
      return "January is known for New Year's celebrations and resolutions."
    case 'Feb':
      return "February is famous for Valentine's Day and Black History Month."
    case 'Mar':
      return 'March marks the beginning of Spring in the northern hemisphere.'
    case 'Apr':
      return 'April is known for April Fool’s Day and Earth Day.'
    case 'May':
      return 'May hosts Mother’s Day and Memorial Day in the United States.'
    case 'Jun':
      return 'June is recognized for Father’s Day and the start of summer.'
    case 'Jul':
      return 'July is known for Independence Day in the United States.'
    case 'Aug':
      return 'August is often associated with hot summer days and vacations.'
    case 'Sep':
      return 'September marks the beginning of autumn and the start of the academic year in many countries.'
    case 'Oct':
      return 'October is famous for Halloween and autumn harvests.'
    case 'Nov':
      return 'November hosts Thanksgiving in the United States.'
    case 'Dec':
      return 'December is celebrated for Christmas and New Year’s Eve.'
    default:
      return ''
  }
}

type TooltipPayload = {
  value: string | number // Asumiendo que value puede ser string o número
  // Agrega otras propiedades según sea necesario
}[]

type CustomTooltipProps = {
  active?: boolean // Opcional si no siempre se pasa
  payload?: TooltipPayload
  label?: string // Opcional si no siempre se pasa
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <p className='label'>{`${label} : ${payload[0].value}`}</p>
        <p className='intro'>
          {label !== undefined ? getIntroOfPage(label as MonthLabel) : 'Valor predeterminado'}
        </p>
        <p className='desc'>Anything you want can be displayed here.</p>
      </div>
    )
  }

  return null // Asegúrate de retornar null o algún fallback si no hay nada que renderizar
}

export default class Example extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/p/sandbox/tooltip-with-customized-content-vgl956'

  render() {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey='sale'
            barSize={45}
            fill='#75767a'
            className='rounded-t-lg'
          />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}
