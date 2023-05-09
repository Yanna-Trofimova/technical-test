import {  Route, Routes } from 'react-router-dom'
import UsersList from './components/UsersList/ UsersList'
import { Layout } from 'Layout/Layout'
import { Home } from 'page/Home'
import { NonExistentPage } from 'page/NonExistentPage'



function App() {
 

  return (
    <>
      

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={< UsersList />} />
           <Route path="*" element={<NonExistentPage/>} />
           
        </Route>
       </Routes>

    </>
  )
}

export default App


