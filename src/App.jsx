import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/Login/Login'
import Navbar from './Component/Navbar/Navbar'
import Body from './Component/Body/Body'
import Tranding from './Component/Tranding/Tranding'
import Footer from './Component/Footer/Footer'
import Men from './Component/Men/Men'
import Women from './Component/Women/Women'
import Kid from './Component/KId/Kid'
import Cart from './Component/Cart/Cart'
import Wishlist from './Component/Wishlist/Wishlist'
import { Route, Routes } from 'react-router-dom'
import Delivery from './Component/Delivery/Delivery'
import Nav from './Component/Admin/Nav/Nav'
import Add from './Component/Admin/Add/Add'
import View from './Component/Admin/View/View'
import Orders from './Component/Admin/Orders/Orders'

function App() {
 

  return (
    <>
  {/* {<Login></Login>} */}
  {/* <Navbar></Navbar> */}
  {/* <Body></Body> */}
  {/* <Tranding></Tranding> */}
  {/* <Footer></Footer>  */}
     {/* <Men></Men> */}
     {/* <Women></Women> */}
     {/* <Kid></Kid> */}
     {/* <Cart></Cart> */}
     {/* <Wishlist></Wishlist> */}
     {/* <Delivery></Delivery> */}
  {/* <Nav></Nav> */}



                        {/* Admin panel  */}

      {/* <Routes>
        <Route path='/' element={<Add></Add>}></Route>
        <Route path='/view' element={<View></View>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
      </Routes> */}




                        {/* User Panel */}
     <Routes>
      <Route path='/' element={<Body></Body>}/>
      <Route path='/men' element={<Men></Men>}/>
      <Route path='/women' element={<Women></Women>}/>
      <Route path='/kid' element={<Kid></Kid>}/>
      <Route path='/wishlist' element={<Wishlist></Wishlist>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
      <Route path='/delivery' element={<Delivery></Delivery>}/>
     </Routes>

    </>
  )
}

export default App
