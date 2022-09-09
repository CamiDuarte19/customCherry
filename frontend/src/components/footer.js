import React,{Component} from 'react'
import './styles/styles.css'
import logo from "./img/icono.png"
import remera from "./img/remera14.jpg"
import taza from "./img/taza16.jpg"
import case14 from "./img/case14.jpg"
import bandera from  "./img/py.png"
export default class Footer extends Component{


render(){

return(

<>

<footer>

<p class="redes">Cherry Bomb en las redes sociales</p>
    <ul className="social">
        <li><a href="https://instagram.com/_customcherry?igshid=YmMyMTA2M2Y="target="_blank"><i class="fa-brands fa-instagram instagram"></i></a></li>
        <li><a href="https://api.whatsapp.com/send?phone=595985594746" target="_blank"><i class="fa-brands fa-whatsapp whatsapp"></i></a></li>
        <li><a href="https://www.facebook.com/CherryBomb-101953308023162" target="_blank"><i class="fa-brands fa-facebook facebook"></i></a></li>
        <li><a href="https://www.tiktok.com/@customcherry?_t=8U7KPM8f4Ld&_r=1" target="_blank"><i class="fa-brands fa-tiktok tiktok"></i></a></li>
    </ul>


<p class="info2"> Somos Una Tienda Online <br/>
    Envianos el diseño que te guste y te personalizamos <br/>
    Estamos ubicados en CDE-Paraguay&nbsp;<img id="paraguay" src={bandera} alt="Bandera Paraguaya"/><br/>
  DELIVERY ZONA CDE, HERNANDARIAS, MINGA GUAZU, PTE. FRANCO:  &nbsp; <i class="bi bi-truck"></i></p> 
  </footer>
</>

)
}
}




