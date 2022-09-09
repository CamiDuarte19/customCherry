import React,{Component} from 'react'
import './styles/styles.css'
import logo from "./img/icono.png"
import remera from "./img/remera14.jpg"
import taza from "./img/taza16.jpg"
import case14 from "./img/case14.jpg"
import bandera from  "./img/py.png"
export default class inicio extends Component{


render(){

return(

<>
<main>
    {/* <h2>main</h2> */}
    <div className="container"/>
     <section>
    <div className="slideText">
            <h2>NUESTROS PRODUCTOS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias sint atque harum laborum deserunt soluta praesentium nesciunt ex ab eum perferendis, architecto accusantium ducimus sapiente officiis similique quibusdam exercitationem?</p>
            <a href="#">Buy</a>
        
        <div id="photo">
            
            <img src={remera} alt="Remera"/>
            <img src={taza} alt="taza"/>
            <img src={case14} alt="case"/>
        
        </div>
        </div>
    </section>
    </main>

</>

)
}
}




