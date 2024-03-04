
import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './Routes/AllRoute'

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoute}/>

    </div>
  )
}

export default App