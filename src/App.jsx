import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './component/HomePage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <HomePage />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App