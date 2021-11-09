import React from "react";
import { SiSoundcloud } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";

function TopBar({ user, setUser }) {
  const cerrarSesion = () => {
    setUser({
      ...user,
      id: "",
      name: "",
    });
  };

  return (
    <>
      {user.id === "" ? (
        <div className="App fixed-top">
          <nav className="top d-flex navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand fw-bolder fs-2" href="/">
                <SiSoundcloud />
                CApp
              </a>
            </div>
          </nav>
        </div>
      ) : (
        <div className="App fixed-top">
          <nav className="top d-flex navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand fw-bolder fs-2" href="/">
                <SiSoundcloud />
                CApp
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-auto" style={{ width: 50 + "vh" }}>
                    <button type="button" className="btn btn-outline-dark">
                      Diezmos
                    </button>
                  </li>
                  <li className="nav-item mx-auto" style={{ width: 50 + "vh" }}>
                    <button type="button" className="btn btn-outline-dark">
                      Ofrendas
                    </button>
                  </li>
                  <li className="nav-item mx-auto" style={{ width: 50 + "vh" }}>
                    <button type="button" className="btn btn-outline-dark">
                      Informe
                    </button>
                  </li>
                  <li
                    className="nav-item dropdown mx-auto"
                    style={{ width: 50 + "vh" }}
                  >
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FaUserCircle />
                      {" " + user.name}
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <button
                          type="button"
                          className="dropdown-item btn btn-secondary"
                        >
                          Configuraciones
                        </button>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dropdown-item btn btn-secondary"
                          onClick={cerrarSesion}
                        >
                          Cerrar Sesion
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default TopBar;
