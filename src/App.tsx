import {BrowserRouter, Routes, Route} from "react-router-dom";

import Games from "./pages/games";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Games />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
