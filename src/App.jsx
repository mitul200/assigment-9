
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Home from './Home'

function App() {
  const data =useLoaderData()
  console.log(data);

  return (
    <>
    <Home key={data.id} data={data}></Home>
    </>
  )
}

export default App
