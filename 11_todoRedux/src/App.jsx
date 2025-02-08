import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <h1 className='text-3xl text-blue-900 text-center font-bold pt-5'>Todo using Redux </h1>
      < AddTodo />
      < Todos />
      </>
  )
}

export default App
