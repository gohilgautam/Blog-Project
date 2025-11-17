import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <div className="h-screen w-full flex flex-col">

      <main className="flex-grow flex justify-center items-center">
        <Outlet />
      </main>

    </div>
  )
}
