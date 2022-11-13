import "./App.css";
import { Routes, Route } from "react-router-dom";
import GestionarProductos from "./components/pages/GestionarProductos/GestionarProductos";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Registro from "./components/pages/Registro/Registro";
import MainSection from "./components/features/MainSection/MainSection";
import Header from "./components/features/Header/Header";
import Footer from "./components/features/Footer/Footer";
import { getUserData } from "./components/services/userServices";
import { createContext, useEffect, useState } from "react";
import { AdminRoutes, UserRoutes } from "./components/middlewares/authServices";
import axios from "axios";

export const baseUrl = "http://localhost:5248";
export const appContext = createContext(null);

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [datosUsuario, setDatosUsuario] = useState({});

  const obtenerUsuario = async (tokk) => {
    const respons = await axios
      .post(`${baseUrl}/usuario/getUser`, {
        tokk: tokk,
      })
      .then(function (res) {
        return res;
      })
      .then(function (token) {
        console.log("variable USEFE");
        setDatosUsuario(token.data);
        return token.data;
      });
  };

  useEffect(() => {
    obtenerUsuario(getUserData());

    setCurrentUser(getUserData());
    console.log("current user ", currentUser);
  }, [currentUser]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
      }}
    >
      <appContext.Provider
        value={{ currentUser, setCurrentUser, datosUsuario, setDatosUsuario }}
      >
        <Header />
        <Routes>
          <Route element={<Home />} path={"/"}></Route>
          <Route element={<Home />} path={"/home"}></Route>
          <Route element={<AdminRoutes />}>
            <Route
              element={
                <MainSection>
                  <GestionarProductos />
                </MainSection>
              }
              path={"/gestionarProductos"}
            ></Route>
          </Route>
          <Route
            element={
              <MainSection>
                <Login />
              </MainSection>
            }
            path={"/login"}
          ></Route>
          <Route
            element={
              <MainSection>
                <Registro />
              </MainSection>
            }
            path={"/register"}
          ></Route>
        </Routes>
        <Footer />{" "}
      </appContext.Provider>
    </div>
  );
}

export default App;
