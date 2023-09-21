import Image from 'next/image'
import Login from './pages/Login/page'
import MarketPlace from './pages/view/MarketPlace/page'
import Landing from './pages/view/page'
import ProductDesc from './pages/ProductDesc/page'
import ShoppingCart from './pages/ShoppingCart/page'

export default function Home() {
  return (
    <div>
      {/* <Landing /> */}
      <Login />
      {/* <MarketPlace /> */}
      {/* <ShoppingCart /> */}
    </div>
  )
}
