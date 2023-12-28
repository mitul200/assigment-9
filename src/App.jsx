
import { Outlet} from 'react-router-dom'
import './App.css'
import Footer from './Footer';

function App() {
  return (
    <>
    <Outlet></Outlet>
    <div>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
