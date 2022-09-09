import React, { Component } from 'react'
import './styles/styles.css'
import logo from "./img/icono.png"
import bandera from "./img/py.png"
import imgs from './imglist'
// import Moleton from './moleton'
import { Link, NavLink } from 'react-router-dom'


export default class Productos extends Component {


  render() {

    return (

      <>


        <nav id="menu">
          <ul >
            <li> <Link to="/Moleton">Moleton</Link> </li>
            <li> <a href="/Remera">Remeras</a> </li>
            <li> <a href="/Hoppy">Hoppy</a> </li>
            <li> <a href="/taza">Tazas</a> </li>
            <li> <a href="/Case">Cases</a> </li>
            <li> <a href="/regalos">Regalos</a> </li>
            <li> <a href="/conjuntos">Conjuntos</a> </li>
            <li> <a href="/crop">Crops</a> </li>
            <li> <a href="/kepis">kepis</a> </li>
            <li> <a href="/cajas">Cajas personalizadas</a> </li>

          </ul>
        </nav>
        <div class="dropdown">
      <button class="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
        aria-expanded="false">
        <i class="bi bi-list"></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           <li> <Link to="/Moleton">Moleton</Link> </li>
            <li> <a href="/Remera">Remeras</a> </li>
            <li> <a href="/Hoppy">Hoppy</a> </li>
            <li> <a href="/taza">Tazas</a> </li>
            <li> <a href="/Case">Cases</a> </li>
            <li> <a href="/regalos">Regalos</a> </li>
            <li> <a href="/conjuntos">Conjuntos</a> </li>
            <li> <a href="/crop">Crops</a> </li>
            <li> <a href="/kepis">kepis</a> </li>
            <li> <a href="/cajas">Cajas personalizadas</a> </li>

      </ul>
    </div>

        {/* <main/> */}
        <main id="productos">
          <section>
            <div className="container">
              <h2>Productos</h2>
              <div className="products">

                <div className="prod-box">
                  {/* <!-- <h4>Pickup Trucks</h4> --> */}
                  <img src={imgs.moleton10} alt="" />
                  <a href="#" className="btn btn-2">Comprar  &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4> Moleton blanco </h4>
                  <span className="price-produc"><b>10$</b></span>
                  &nbsp;
                  <span className="span-available">Disponible </span>

                </div>
                <div className="prod-box">
                  {/* <!-- <h4>SUVs</h4> --> */}
                  <img src={imgs.reme3} alt="" />
                  <a href="#" class="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4> Remera con diseño</h4>
                  <span className="price-produc"><b>15$</b></span>
                  &nbsp;
                  <span className="span-available">Disponible </span>

                </div>

                <div className="prod-box">
                  <img src={imgs.hoppi11} alt="Auto Rojo" />
                  <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4> Hoppy con diseño</h4>
                  <span className="price-produc"><b>12$</b></span>
                  &nbsp;
                  <span className="span-available">Disponible </span>

                </div>

                <div className="prod-box">
                  <img src={imgs.taza13} alt="Auto Rojo" />
                  <a href="#" class="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4> Taza </h4>
                  <span className="price-produc"><b>25$</b></span>
                  &nbsp;
                  <span className="span-available"> Disponible </span>

                </div>

                <div className="prod-box">
                  <img src={imgs.case3} alt="Auto Rojo" />
                  <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4> Case</h4>
                  <span className="price-produc"><b>18$</b></span>
                  &nbsp;
                  <span className="span-available">Disponible </span>



                </div>
                <div class="prod-box">
                  {/* <!-- <h4>Wagon</h4> --> */}
                  <img src={imgs.regalo155} alt="Auto Rojo" />
                  <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4> Regalo personalizado </h4>
                  <span className="price-produc"><b>9$</b></span>
                  &nbsp;
                  <span className="span-available">Disponible </span>


                </div>
                <div className="prod-box">
                  {/* <!-- <h4>Convertibles</h4> --> */}
                  <img src={imgs.conju12} alt="Auto Rojo" />
                  <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4> Conjunto negro </h4>
                  <span className="price-produc"><b>27$</b></span>
                  &nbsp;
                  <span className="span-available">Disponible </span>
                </div>

                <div className="prod-box">
                  {/* <!-- <h4>Hatchbacks</h4> --> */}
                  <img src={imgs.kepi12} alt="Kepi" />
                  <a href="#" className="btn btn-2">Comprar &nbsp;<i className="bi bi-cart-check"></i></a>
                  <h4> Kepi </h4>
                  <span className="price-produc"><b>31$</b></span>
                  &nbsp;
                  <span className="span-available">Disponible </span>
                  <i className="bi bi-bag-heart"></i>
                </div>

              </div>
            </div>
          </section>
        </main>

      </>
    )
  }
}