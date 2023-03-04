import { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/homePage/homepage'
import DashboardPage from '../pages/dashboardPage/dashboardPage'
import paths from './paths'

interface Page {
  path: string
  pageId: string
  jsx: ReactElement
}

const pages: Page[] = [
  {
    pageId: 'home',
    path: paths.home,
    jsx: <HomePage />
  },
  {
    pageId: 'dashboard',
    path: paths.dashboard,
    jsx: <DashboardPage />
  }
]

const PageRoutes = () => (
  <Routes>
    {pages.map(({ path, pageId, jsx }: Page) => (
      <Route path={path} key={pageId} element={jsx} />
    ))}
  </Routes>
)

export default PageRoutes