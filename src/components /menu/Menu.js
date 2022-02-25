/** Style */
import './menu.css';

import React, { useState, useEffect } from 'react';
import { AppContext } from '../AppContextProvider'

/**
 * @author: Roxana Viloria
 * @email : roxanaviloria02@gmail.com
 * @returns : categorias en las que se agrupan los productos
 */

export default function Menu (){

    const { category }= React.useContext(AppContext)

    const [categories, setCategories]= useState([])
    const [categoryValue, setCategory ]= category

/** evento que al presionar cada boton de categoria despliegue los productos que se anidan en cada una de ellas */   
    const onClickCategories =(e)=> {
        setCategory(e.currentTarget.dataset.id)
    }

/** En useEffect: en la condición una vez solicitada la información (fetch) se agregó un ".then" con otro condiciconal, 
 *      para que el json sea retornado, si hay una respuesta correcta o positiva, 
        de no ser asi y arrojar un error al intentar acceder a la base de datos,se agregó ".catch" (linea 46) para que
        el usuario observe un retorno a la pantalla de inicio.
        En este caso, ocurrió en un par de oportunidades que al hacer la solicitud, 
        arrojaba error por sobrepasar capacidad de conexión en la base de datos.
 */ 

    useEffect (()=>{
        fetch (`https://bsale-api-roxana.herokuapp.com/api/category`)
          .then ((response) => {
              if (response.ok) {
                  return response.json()
              }
              throw new Error('Something went wrong.');
          }).then (json => {
            setCategories(json)
          }).catch((err) => {
              setCategories([])
          })
    },[])

    return (
        <div className="menu">
            <nav>
                <div className="flex-form">
                     {/* Recorre las categorias y crea un arreglo de botones de cada categoria*/}
                    {categories.map((category)=>{
                        return(
                            <button key={category.id} type="button" onClick={onClickCategories} data-id={category.id} className="categories">{category.name}</button>
                        );
                    })}
                </div>
             </nav>
        </div>
    )
}
