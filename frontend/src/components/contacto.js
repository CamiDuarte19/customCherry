import React,{Component} from 'react'
import './styles/styles.css'
export default class Contacto extends Component{


render(){

;
  
return(

  <>

<main id="contacto">
<div className="container">
  <h2 className='mapo'>Contacto</h2>
  <div className="contact">
    <div className="contact-info contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558.4929153412706!2d-54.678648339467195!3d-25.49777476608108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f685c8e9519d4f%3A0xe7491d848aec6d4e!2sPlaza%20City!5e0!3m2!1sen!2spy!4v1656191816203!5m2!1sen!2spy"
        /* width="100%" height="100%" style="border:0;" */ allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className="contact-info contact-form">
      <h3>Ponte en contacto con nosotros</h3>
      <form>
        <div className="row">
          <div className="col">
            <div className="form-input">
              <label htmlFor="name">Nombre:</label>
              <input type="text"/>
            </div>
            <div className="form-input">
              <label htmlFor="tel">Tel.:</label>
              <input type="tel"/>
            </div>
          </div>
          <div className="col">
            <div className="form-input">
              <label htmlFor="surname">Apellido:</label>
              <input type="text"/>
            </div>
            <div className="form-input">
              <label htmlFor="email">Email:</label>
              <input type="email"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea name="mensaje" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <input type="submit" value="Enviar" className="btn btn-2"/>
      </form>
    </div>
  </div>
  
  
 </div>
  
  </main>




</>

)
}
}
