import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Catalog from "./components/catalog/Catalog";
import AddCard from "./components/addCard/AddCard";
import Details from "./components/details/Details";
import Search from "./components/search/Search";
import NotFound from "./components/notFound/NotFound";
import { useState, useEffect } from "react";
import { authContext } from "./context/authContext";
import PrivacyGuard from "./components/PrivacyGuard";
import AboutUs from "./components/about/AboutUs";
import EditCard from "./components/edit/Edit";
import PublicGuard from "./components/PublicGuard";

function App() {
  const [authState, setAuthState] = useState(() => {
    const savedState = localStorage.getItem("authState");
    return savedState ? JSON.parse(savedState) : {};
  });

  const changeAuthState = (state) => {
    localStorage.setItem("authState", JSON.stringify(state));
    setAuthState(state);
  };

  const logout = () => {
    localStorage.removeItem("authState");
    setAuthState({});
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
    logout,
  };

  useEffect(() => {
    const storedAuthState = localStorage.getItem("authState");
    if (storedAuthState) {
      setAuthState(JSON.parse(storedAuthState));
    }
  }, []);

  return (
    <authContext.Provider value={contextData}>

      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
              <Route path="/" element={<Home />} />

              <Route element={<PublicGuard/>}>

                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />

              </Route>

              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="*" element={<NotFound />} />

              <Route element={<PrivacyGuard/>}>
                
                  <Route path="/search" element={<Search />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/addCard" element={<AddCard />} />
                  <Route path="catalog/:cardId/details" element={<Details />} />
                  <Route path="/catalog/:cardId/edit" element={<EditCard/>} />

              </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </authContext.Provider>
  );
}

export default App;
