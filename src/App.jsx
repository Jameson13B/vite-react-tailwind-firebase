import './App.css'
import Atomic10Logo from './assets/atomic10-logo.png'

function App() {
  return (
    <>
      <div>
        <a href="https://atomic10.studio" target="_blank">
          <img src={Atomic10Logo} className="logo" alt="Atomic10 Studio logo" />
        </a>
      </div>
      <h1>Vite + React + Tailwind + Firebase Template</h1>
      <p className="max-w-96 mx-auto my-[1rem] text-2xl text-left">
        Follow the steps below to get started:
      </p>
      <ul className="max-w-80 mx-auto text-left">
        <li className="list-disc">Add Firebase variables to .env</li>
        <li className="list-disc">Update package.json and index.html</li>
        <li className="list-disc">
          Install dependencies <code>npm install</code>
        </li>
        <li className="list-disc">
          Run <code>npm run dev</code>
        </li>
      </ul>
    </>
  )
}

export default App
