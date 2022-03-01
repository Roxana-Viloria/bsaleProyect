/**Style */
import './body.css'

import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../AppContextProvider'

/**Componentes importados, para posteriormente llamarlos en html */
import Products from '../products/Products';
import NotFound from '../notfound/NotFound';


/**
 * Este componente ha sido creado para mostrar en pantalla los productos que se despliegan al seleccionar una categoria del menu de la app.
 * @author: Roxana Viloria
 * @email : roxanaviloria02@gmail.com
 * @returns: productos de cada categoria, segun corresponda ( boton clickeado)
 */
export default function Body(){
    const { category, isPress, search, elements }=useContext(AppContext)

    const [categoryValue, setCategory ]= category
    const [products, setProducts]= elements

    const [searchValue, setSearch]= search
    const [press, setPress]=isPress
   
    
/** En useEffect: en la condición una vez solicitada la información (fetch) se agregó un ".then" con otro condiciconal, 
 *      para que el json sea retornado, si hay una respuesta correcta o positiva, 
        de no ser asi y arrojar un error al intentar acceder a la base de datos,se agregó ".catch" (linea 46) para que
        el usuario observe un retorno a la pantalla de inicio.
        En este caso, ocurrió en un par de oportunidades que al hacer la solicitud, 
        arrojaba error por sobrepasar capacidad de conexión en la base de datos.
 */ 
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
              setProducts(json.products)
              setCategory (0)
          }).catch((err) => {
            setProducts([])
            setCategory (0)
            
        })
        } 

/** En useEffect: en la condición una vez solicitada la información (fetch) se agregó un ".then" con otro condiciconal, 
 *      para que el json sea retornado, si hay una respuesta correcta o positiva, 
        de no ser asi y arrojar un error al intentar acceder a la base de datos,se agregó ".catch" (linea 46) para que
        el usuario observe un retorno a la pantalla de inicio.
        En este caso, ocurrió en un par de oportunidades que al hacer la solicitud, 
        arrojaba error por sobrepasar capacidad de conexión en la base de datos.
 */ 
        if(searchValue !== "" && press){
            fetch (`https://bsale-api-roxana.herokuapp.com/api/product?name=${searchValue}`)
            .then ((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Something went wrong.');
            })
            .then (json => {
                setProducts(json)
                setSearch("")
                setPress(false)
            }).catch((err) => {
                setProducts([])
                setSearch("")
                setPress(false)
            })

        }else{
            setPress(false)
        }
    },[categoryValue, press])

    return (
        <div className="bodyContainer">
            <div className="productsContainer welcome">{products.length > 0 ? "Resultados de la búsqueda" : "Realiza tu Búsqueda" }</div>
             <div className="productsContainer">
                 {products.length === 0 && searchValue ==="" ?
                    <NotFound/>
                 :  products.map((product)=>{
                    return(
                    <Products
                    key={product.id}
                        product={product}
                    />
                    )
                 }) }
             </div>
        </div>

    );

}