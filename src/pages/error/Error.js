import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h2>Página no encontrada</h2>
        <Link to="/">Volver</Link>
    </div>
  )
}

export default Error