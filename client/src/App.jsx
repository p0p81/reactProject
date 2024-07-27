import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Catalog from "./components/catalog/Catalog";
import AddCard from "./components/addCard/AddCard";
import Search from "./components/search/Search";
import NotFound from "./components/notFound/NotFound";


function App() {
  return (
    <div id="box">
      <Header />

      
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
