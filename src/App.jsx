import {  Route, Routes } from 'react-router-dom'
import UsersList from './components/UsersList/ UsersList'
import { Layout } from 'Layout/Layout'
import { Home } from 'page/Home'



function App() {
 

  return (
    <>
      {/* <UsersList /> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           <Route path="/tweets" element={< UsersList/>} />
           {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Route>
       </Routes>

    </>
  )
}

export default App


