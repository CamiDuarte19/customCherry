import React,{Component} from 'react'
import './styles/styles.css'
import logo from "./img/icono.png"
import remera from "./img/remera14.jpg"
import taza from "./img/taza16.jpg"
import case14 from "./img/case14.jpg"
import bandera from  "./img/py.png"
import { NavLink } from 'react-router-dom'
export default class Header extends Component{


render(){

return(

<>
<header>
    <img src={logo}alt="" class="bomb"/>
    <h1 id="Logo"></h1>
    <h1 className='title'>Cherry Bomb </h1>
    <div class="clear"></div>
</header>
    <nav id="main-nav">  

<NavLink to='/'> Inicio </NavLink>
<NavLink to='Productos'> Productos </NavLink>
<NavLink to='Contacto'>Contacto</NavLink>

    <div class="clear"></div>
</nav>

</>

)
}
}




