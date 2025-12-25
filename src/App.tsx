import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Suspense, lazy} from "react"

const Homepage = lazy(() => import("./Pages/Homepage"));
function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </> 
    </Suspense>
  )
}

export default App
