import { createBrowserRouter } from 'react-router-dom'
import DesignerView from '../views/DesignerView.jsx'
import SpreadView from '../views/SpreadView.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DesignerView />,
  },
  {
    path: '/designer',
    element: <DesignerView />,
  },
  {
    path: '/spread',
    element: <SpreadView />,
  },
])

export default router