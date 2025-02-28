
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./components/Main";
import { ProductDetails } from "./components/ProductDetails";
import {useAuth} from './components/AuthContext'
function App() {
  const{user} = useAuth()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id"  element={user ? <ProductDetails /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;


