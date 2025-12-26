import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './C-File/Rootlayout'
import Index from './P-File/Index'

function App() {

  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>} >
        <Route path='/' element={<Index/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
