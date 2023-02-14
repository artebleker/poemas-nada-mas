import React from 'react'
import { Button } from 'react-bootstrap'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import "./eBookBuy.css"
const EBookBuy = () => {
  return (
    <div>
          <Link to="/categorias"  className="volver-link">
      <Button variant="primary"  className="volver-button">
         <BiArrowBack/> 
      </Button>
        </Link>
        <section className='buy-e-book-section'>
          <h2>E-Books para comprar</h2>
          <div className='buy-e-book-div'>
            
          </div>
        </section>
        </div>
  )
}

export default EBookBuy