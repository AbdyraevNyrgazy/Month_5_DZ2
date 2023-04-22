import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LayOut from "./components/LayOut/layOut";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Header from "./components/Header/Header";

function App() {
  return (
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<MainPage/>}/>
              <Route path='about/:id' element={<AboutPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
