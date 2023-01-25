/* eslint-disable @typescript-eslint/promise-function-async */
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom'


import PageLayout from './pages/PageLayout'
import StudyList from './pages/studyList/StudyList'

const routeDetails = [
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '',
        element: <StudyList />
      },
      {
        path: 'study',
        element: <Outlet />,
        children: [
          { path: '', element: <StudyList /> },
          { path: 'listing', element: <StudyList /> }
        ]
      }
    ]
  }
]

const router = createHashRouter(routeDetails)

function App() {
  return (
    <>
    
      <RouterProvider router={router} />
    </>
  )
}

export default App
