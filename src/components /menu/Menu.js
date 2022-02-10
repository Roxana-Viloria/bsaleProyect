import './menu.css';
import React, { useState, useEffect } from 'react';
import { AppContext } from '../AppContextProvider'

export default function Menu (){
    
    const { category }= React.useContext(AppContext)

    const [categories, setCategories]= useState([])
    const [categoryValue, setCategory ]= category

    const onClickCategories =(e)=> {
        console.log(e)
        setCategory(e.currentTarget.dataset.id)
    }


    // Se agregó un .then con un condificonal, de que el jso sea retornado si el repsonse está ok, 
    // y posteriormente se aregró un catch para los errores que presentaban, al intentar acceder a la base de datos, 
    // siendo que señala que se excedió la cantidad de conexiones a la base de datos.

    useEffect (()=>{
        fetch (`https://bsale-api-roxana.herokuapp.com/api/category`)
          .then ((response) => {
              if (response.ok) {
                  return response.json()
              }
              throw new Error('Something went wrong.');
          }).then (json => {
            console.log(json)
            setCategories(json)
          }).catch((err) => {
              console.log(err);
              setCategories([])
          })
          
    },[])

    return (
        <div className="menu">
            <nav>
                <div className="flex-form">
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
