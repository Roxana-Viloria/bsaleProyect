/** Style */
import './notFound.css' 

import React from 'react'

/**
 * @author: Roxana Viloria
 * @email : roxanaviloria02@gmail.com
 * @returns : de no encontrarse el producto solicitado/buscado en el input search, aparecerá un letrero indicando 
 *            que no se ha encontrado reultado para la busqueda hecha
 */
 export default function NotFound() {
  
    return (
    <div className="reject">
        <div >
            <h2>Lo sentimos, no hemos encontrado lo que buscas.</h2>
            <h3>¡Intentalo de nuevo!</h3>
        </div>
    </div>
  );
}

 