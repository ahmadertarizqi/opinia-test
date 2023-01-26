import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from "~/components/layouts/header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-100 flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <Header />
        <div>
          <div className="flex">
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="text-3xl font-bold underline text-red-500">Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
