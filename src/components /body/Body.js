import './body.css'
import Products from '../products/Products';

import React, { useEffect, useState, useContext } from 'react'

import { AppContext } from '../AppContextProvider'


export default function Body(){
    const { category, isPress, search }=useContext(AppContext)

    const [categoryValue, setCategory ]= category
    const [products, setProducts]= useState ([])

    const [searchValue, setSearch]= search
    const [press, setPress]=isPress
   
    // Se agregó un .then con un condificonal, de que el jso sea retornado si el repsonse está ok, 
    // y posteriormente se aregró un catch para los errores que presentaban, al intentar acceder a la base de datos, 
    // siendo que señala que se excedió la cantidad de conexiones a la base de datos.
    // (misma implementación en el componente Menu)

    useEffect (()=>{
        if (categoryValue!== 0 && !press){
        fetch (`https://bsale-api-roxana.herokuapp.com/api/category/${categoryValue}`)
        .then ((response) => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Something went wrong.');
        })
          .then (json => {
              console.log(json)
              setProducts(json.products)
              setCategory (0)
          }).catch((err) => {
            console.log(err);
            setProducts([])
            setCategory (0)
            
        })
        } 

        if(searchValue !== "" && press){
            fetch (`https://bsale-api-roxana.herokuapp.com/api/product?name=${searchValue}`)
            .then ((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Something went wrong.');
            })
            .then (json => {
                console.log(json)
                setProducts(json)
                setSearch("")
                setPress(false)
            }).catch((err) => {
                console.log(err);
                setProducts([])
                setSearch("")
                setPress(false)
            })
        }
    },[categoryValue, press])

    return (
        <div className="bodyContainer">
             <div className="productsContainer">
                 {products.map((product)=>{
                    return(
                    <Products
                        product={product}
                    />
                    )
                 })}
             </div>
        </div>

    );
}