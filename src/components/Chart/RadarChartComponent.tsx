import { PureComponent } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    subject: 'Electronics',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Clothing',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Home Appliances',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Books',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Toys',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Sports Equipment',
    A: 65,
    B: 85,
    fullMark: 150,
  },
]

export default class Example extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/p/sandbox/radar-chart-specified-domain-l68xry'

  render() {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name='Mike'
            dataKey='A'
            stroke='#fff'
            fill='#fff'
            fillOpacity={0.6}
          />
          <Radar
            name='Lily'
            dataKey='B'
            stroke='#75767a'
            fill='#75767a'
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    )
  }
}
