import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface PageTitleProps {
  title: string
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  const location = useLocation()

  useEffect(() => {
    document.title = title
  }, [location, title])

  return null
}

export default PageTitle
