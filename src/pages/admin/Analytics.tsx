import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'
import AreaChartComponent from '../../components/Chart/AreaChartComponent'
import BarChartComponent from '../../components/Chart/BarChartComponent'
import BarTooltipChartComponets from '../../components/Chart/BarTooltipChartComponets'
import PieChartComponent from '../../components/Chart/PieChartComponent'
import RadarChartComponent from '../../components/Chart/RadarChartComponent'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs'
import { useTranslation } from 'react-i18next'

export default function Analytics() {
  const { t } = useTranslation()

  return (
    <main className='grid items-start flex-1 w-full h-full gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
      <Tabs defaultValue='all'>
        <div className='flex items-center'>
          <TabsList>
            <TabsTrigger value='all'>{t('all')}</TabsTrigger>
            <TabsTrigger value='analycts'>{t('analycts')}</TabsTrigger>
            <TabsTrigger value='draft'>{t('draft')}</TabsTrigger>
            <TabsTrigger value='archived' className='hidden sm:flex'>
              {t('archived')}
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value='all'>
          <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
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
                <CardTitle className='text-sm font-medium'>
                  {t('sales')}
                </CardTitle>
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
            <div className='col-span-full'>
              <div className='grid grid-cols-4 gap-4'>
                <Card className='col-span-2 lg:col-2 md:col-span-2'>
                  <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
                    <CardTitle className='text-2xl font-bold'>
                      {t('sales')}
                    </CardTitle>
                    {/* <Activity className='w-4 h-4 text-muted-foreground' /> */}
                  </CardHeader>
                  <CardContent>
                    <div style={{ width: '100%', height: '500px' }}>
                      <BarTooltipChartComponets />
                    </div>
                  </CardContent>
                </Card>
                <Card className='col-span-2 md:col-span-2'>
                  <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
                    <CardTitle className='text-2xl font-bold'>
                      {t('products')}
                    </CardTitle>
                    {/* <Activity className='w-4 h-4 text-muted-foreground' /> */}
                  </CardHeader>
                  <CardContent>
                    <div style={{ width: '100%', height: '500px' }}>
                      <RadarChartComponent />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          {/* Chart */}
        </TabsContent>
        <TabsContent value='analycts'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
            <div className='p-4 overflow-hidden rounded-lg shadow-lg'>
              <div style={{ width: '100%', height: '500px' }}>
                <AreaChartComponent />
              </div>
            </div>
            <div className='p-4 overflow-hidden rounded-lg shadow-lg'>
              <div style={{ width: '100%', height: '500px' }}>
                <BarChartComponent />
              </div>
            </div>
            <div className='p-4 overflow-hidden rounded-lg shadow-lg'>
              <div style={{ width: '100%', height: '500px' }}>
                <PieChartComponent />
              </div>
            </div>
            <div className='p-4 overflow-hidden rounded-lg shadow-lg'>
              <div style={{ width: '100%', height: '500px' }}></div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
