import { Link, useLocation } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import { Fragment } from 'react/jsx-runtime'
import { useTranslation } from 'react-i18next'

export default function HistoryNav() {
  const { t } = useTranslation()

  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(x => x)
  return (
    <div>
      <Breadcrumb className='hidden md:flex'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to='/'>{t('dashboard')}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            return (
              <Fragment key={name}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>
                      <p className='font-semibold capitalize'>{t(`${name}`)}</p>
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={routeTo}>
                        <p className='font-semibold capitalize'>
                          {t(`${name}`)}
                        </p>
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
