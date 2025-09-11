import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import AboutUs from "./pages/AboutUs";
import Detail from "./pages/Detail";
import Tv from "./pages/Tv";
const App = () => {

return(
  <Router>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/search" element={<SearchPage />} />
      <Route path = "/AboutUs" element={<AboutUs />} />
      <Route path = "/Detail" element={< Detail/>} />
      <Route path = "/Tv" element={< Tv/>} />
    </Routes>
  </Router>

)


}
export default App ;