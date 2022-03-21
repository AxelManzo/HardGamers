import React from "react";
import carrito from "../header/carrito.png";

const NavBar = () => {
    return (
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" translate="no">HardGamers®</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        <a className="nav-link" href="#">Productos destacados</a>
        <a className="nav-link" href="#">Radeon AMD</a>
        <a className="nav-link" href="#">GeForce</a>
      </div>
    </div>
    <div>
    <button type="button" class="btn px-2 btn-warning">
    <img  src = {carrito} />
    </button>
    </div>
  </div>
</nav>
</>
    )
}
export default NavBar;