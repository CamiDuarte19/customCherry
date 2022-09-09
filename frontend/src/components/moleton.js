import React,{Component} from 'react'
import imgs from './imglist'
import './styles/styles.css'
export default class Moleton extends Component{


render(){


  
return(

  <>

    <h2> Moleton </h2>
        <main id="productos">
    <section>
            <div className="container">
              <h2>Productos</h2>
              <div className="products">
    
                <div className="prod-box">
                  <img src={imgs.moleton11} alt="Moleton Blanco"/>
                  <a href="#" className="btn btn-2">Comprar  &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4> Moleton blanco </h4>
                <span className="price-produc"><b>10$</b></span> 
                  &nbsp;
                  <span className="span-available">Disponible </span>
                
                </div>
                <div className="prod-box">
                  <img src={imgs.produc22} alt="Moleton Crema"/>
                  <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4>  Moleton Crema</h4>
                  <span className="price-produc"><b>15$</b></span> 
                  &nbsp;
                  <span className="span-available">Disponible </span>
                
                </div>
    
                <div  className="prod-box">
                  <img src={imgs.moleton22} alt=" Moleton Verde"/>
                  <a href="#" class="btn btn-2">Comprar &nbsp;<i className="bi bi-cart-check"></i></a>
                  <h4> Moleton verde </h4>
                  <span className="price-produc"><b>12$</b></span> 
                  &nbsp;
                  <span className="span-available">Disponible </span>
                
                </div>
    
                <div className="prod-box">
                  <img src={imgs.moleton1} alt=" Moleton Mostaza"/>
                  <a href="#" class="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4>  Moleton mostaza </h4>
                  <span className="price-produc"><b>25$</b></span> 
                  &nbsp;
                  <span className="span-available"> Disponible </span>
                
                </div>
    
             
                <div className="prod-box">
                  <img src={imgs.moleton2} alt=" Moleton Gris"/>
                  <a href="#" class="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4>  Moleton gris</h4>
                  <span className="price-produc"><b>18$</b></span> 
                  &nbsp;
                  <span className="span-available">Disponible </span>
                
                  
                </div>
                <div className="prod-box">
                  <img src={imgs.moleton3} alt="Moleton Gris"/>
                  <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4> Moleton gris</h4>
                  <span className="price-produc"><b>9$</b></span> 
                  &nbsp;
                  <span className="span-available">Disponible </span>
                
                   
                </div>
                <div className="prod-box">
                  <img src={imgs.moleton4} alt="Moleton Blanco"/>
                  <a href="#" class="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4> Moleton blanco</h4>
                  <span className="price-produc"><b>27$</b></span> 
                  &nbsp;
                  <span className="span-available">Disponible </span>
                
    
                
                </div>
                <div className="prod-box">
                  <img src={imgs.moleton5} alt="Moleton Negro "/>
                  <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                  <h4> Moleton negro</h4>
                  <span className="price-produc"><b>31$</b></span> 
                  &nbsp;
                  <span className="span-available">Disponible </span>
                  <i className="bi bi-bag-heart"></i>
                
                  
                </div>

            <div className="prod-box">
                <img src={imgs.moleton6} alt="Moleton negro/blanco"/>
                <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                <h4>Moleton negro/blanco</h4>
                <span className="price-produc"><b>31$</b></span> 
                &nbsp;
                <span className="span-available">Disponible </span>
                <i className="bi bi-bag-heart"></i>
              
                
              </div>
              <div className="prod-box">
                <img src={imgs.moleton7} alt="Moleton Azul"/>
                <a href="#" class="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                <h4> Moleton azul </h4>
                <span className="price-produc"><b>31$</b></span> 
                &nbsp;
                <span className="span-available">Disponible </span>
                <i className="bi bi-bag-heart"></i>
              
                
              </div>
              <div className="prod-box">
                <img src={imgs.moleton9} alt="Moleton Blanco"/>
                <a href="#" class="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                <h4> Moleton blanco</h4>
                <span className="price-produc"><b>31$</b></span> 
                &nbsp;
                <span className="span-available">Disponible </span>
                <i className="bi bi-bag-heart"></i>
              
                
              </div>
              <div className="prod-box">
                <img src={imgs.moleton99} alt="Moleton Blanco"/>
                <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                <h4> Moleton blanco</h4>
                <span className="price-produc"><b>31$</b></span> 
                &nbsp;
                <span className="span-available">Disponible </span>
                <i className="bi bi-bag-heart"></i>
              
                
              </div>
              <div className="prod-box">
                <img src={imgs.moleton111} alt="Moleton Azul"/>
                <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                <h4> Moleton azul</h4>
                <span className="price-produc"><b>31$</b></span> 
                &nbsp;
                <span className="span-available">Disponible </span>
                <i className="bi bi-bag-heart"></i>
              
                
              </div>
              <div className="prod-box">
                <img src={imgs.moleton12} alt="Moleton Negro"/>
                <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                <h4> Moleton negro</h4>
                <span className="price-produc"><b>31$</b></span> 
                &nbsp;
                <span className="span-available">Disponible </span>
                <i className="bi bi-bag-heart"></i>
              
                
              </div>
              <div className="prod-box">
                <img src={imgs.moleton13} alt=" Moleton Granate"/>
                <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                <h4>Moleton granate</h4>
                <span className="price-produc"><b>31$</b></span> 
                &nbsp;
                <span className="span-available">Disponible </span>
                <i className="bi bi-bag-heart"></i>
              
                
              </div>
              <div className="prod-box">
                <img src={imgs.moleton14}alt="Moleton Negro"/>
                <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
                <h4> Moleton Negro</h4>
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
