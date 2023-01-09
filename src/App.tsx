import { useAppSelector } from './app/hooks'
import Dashboard from './component/Dasboard'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'

function App() {
  const theme = useAppSelector((state) => state.header.darkMode)
  return (
    <div className={`w-full bg-gray-100 h-[810px] ${theme ? 'bg-black' : ''}`}>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default App
