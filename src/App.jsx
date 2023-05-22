import {  Route, Routes } from 'react-router-dom'
// import UsersList from './components/UsersList/ UsersList'
import { Layout } from 'Layout/Layout'
import { Home } from 'pages/Home/Home'
import { NonExistentPage } from 'pages/NonExistentPage/NonExistentPage'
import { Tweets } from 'pages/Tweets/Tweets'



function App() {
 

  return (
    <>
      

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={< Tweets />} />
           <Route path="*" element={<NonExistentPage/>} />
           
        </Route>
       </Routes>

    </>
  )
}

export default App


