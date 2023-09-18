import Image from 'next/image'
import ProductForm from './components/ProductForm'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function Home() {
  return (
    <div className='my-5'>
      {/* <Login /> */}
      {/* <ProductForm /> */}
      <Dashboard />
    </div>
  )
}
