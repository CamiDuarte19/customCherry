import React,{Component} from 'react'
import imgs from './imglist'
import './styles/styles.css'
export default class Regalos extends Component{

    render(){


  
        return(
        
<>


<h2>Regalos Personalizados </h2>
        <main id="productos"> 
    <section>
   
        <div className="container">
          <h2>Productos</h2>
          <div className="products">

            <div className="prod-box">
              <img src={imgs.regalos1} alt="Cajita Personalizado"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4> Cajita Personalizado</h4>
            <span className="price-produc"><b>10$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
            
            </div>
            <div className="prod-box">
              <img src={imgs.regalos2} alt="Cajita con fotos"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4> Cajita con fotos</h4>
              <span className="price-produc"><b>15$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
            </div>

            <div className="prod-box">
              <img src={imgs.regalos3} alt="Agenda tapa Dura"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4>Agenda tapa Dura</h4>
              <span className="price-produc"><b>12$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
            
            </div>

            <div class="prod-box">
              <img src={imgs.regalos4} alt="Agenda tapa Dura"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4>Agenda tapa Dura</h4>
              <span className="price-produc"><b>25$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
            
            </div>

         
            <div className="prod-box">
              <img src={imgs.regalos5}alt="Agenda tapa Dura"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4> Agenda tapa Dura</h4>
              <span className="price-produc"><b>18$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
            </div>

            <div className="prod-box">
              <img src={imgs.regalos6} alt=" Llavero personalizado"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4>  Llavero personalizado</h4>
              <span className="price-produc"><b>9$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
            </div>

            <div className="prod-box">
              <img src={imgs.regalos7} alt="Despertador led"/>
              <a href="#" class="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4> Despertador led</h4>
              <span className="price-produc"><b>27$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
    
            </div>

            <div className="prod-box">
              <img src={imgs.regalos88} alt=" Vaso con manija"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4>  Vaso con manija</h4>
              <span className="price-produc"><b>31$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
              <i className="bi bi-bag-heart"></i>
            </div>

            <div className="prod-box">
              <img src={imgs.regalos9} alt="Piedras para personalizar"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4>Piedras para personalizar</h4>
              <span className="price-produc"><b>31$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
              <i className="bi bi-bag-heart"></i>
            
              
            </div>

            <div className="prod-box">
              <img src={imgs.regalos10} alt="Vaso térmico con pajita"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4> Vaso térmico con pajita</h4>
              <span className="price-produc"><b>31$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
              <i className="bi bi-bag-heart"></i>
            
              
            </div>

            <div className="prod-box">
              <img src={imgs.regalos11} alt=" Azulejos en varios tamaños"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4> Azulejos en varios tamaños</h4>
              <span className="price-produc"><b>31$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
              <i className="bi bi-bag-heart"></i>
            
              
            </div>
            <div className="prod-box">
            
              <img src={imgs.regalos13} alt="Bolígrafos personalizados"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4>Bolígrafos personalizados</h4>
              <span class="price-produc"><b>31$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
              <i className="bi bi-bag-heart"></i>
            
              
            </div>
            <div className="prod-box">
    
              <img src={imgs.regalos14} alt="Mouse pad personalizado"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4> Mouse pad personalizado</h4>
              <span className="price-produc"><b>31$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
              <i className="bi bi-bag-heart"></i>
            
              
            </div>

            <div className="prod-box">
              <img src={imgs.regalos16} alt="Rompecabeza personalizado"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4> Rompecabeza </h4>
              <span className="price-produc"><b>31$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
              <i className="bi bi-bag-heart"></i>
            
              
            </div>

            <div className="prod-box">
              <img src={imgs.regalos17} alt="Almohada personalizado"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4>Almohada personalizado</h4>
              <span className="price-produc"><b>31$</b></span> 
              &nbsp;
              <span className="span-available">Disponible </span>
              <i className="bi bi-bag-heart"></i>
            
              
            </div>
            <div className="prod-box">
              <img src={imgs.regalos18} alt=" Llavero Personalizado"/>
              <a href="#" className="btn btn-2">Comprar &nbsp; <i className="bi bi-cart-check"></i></a>
              <h4> Llavero Personalizado</h4>
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
