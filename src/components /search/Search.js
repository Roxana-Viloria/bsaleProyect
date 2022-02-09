import './search.css'

import React, { useState } from 'react'
import glass from '../../pictures/icon-search.svg'



export default function Search (){
   
   
    const [search, setSearch]= useState (null);
    const [press, setPress]=useState (false)
   

    const onSearchChange = (e)=>{
        setSearch (e.target.value)
      } 
    
    const onClickSearch =()=>{
        setPress (true)
      }


    const onEraser =(e)=>{
        setSearch ("")
      }

    return (
        <div>
            <form> 
              <div className="formulario">
                <div className="border">
                  <input 
                      className="input"
                      type="text"
                      placeholder="Buscar Gif"
                      onChange={onSearchChange}
                    //   value={searchValue === null ? "" : searchValue}
                      >
                  </input>
                      {/* {searchValue !== null && searchValue.length > 0 ? 
                      <button
                      className="eraser"
                      onClick={onEraser}
                      type="button"
                      >X  
                      </button> : ("")
                      } */}
                </div>
                <button
                type="button"
                className="btn-glasses"
                onClick={onClickSearch}
                >
                <img src={glass} className="glass"></img>  
                </button>
              </div>
            </form>
        </div>

    );
}