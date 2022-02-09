import './menu.css';
import Select from '../select/Select';


export default function Menu (props){
    const Lacteos = ["Cualquier País","Argentina","Brasil","Chile","Uruguay"];
    const Viveres =["Cualquier Precio","Económico","Confort","Lujos","Magnífico"];
    const Frutas =["Cualquier Tamaño","pequeño","mediano","grande"]
    const Carniceria = [""]
    const Pescaderia =[""]
    const Limpieza = [""]
    const Papelería = [""]


    return (
        <div className="menu">
            <nav>
                <div className="flex-form">
                    <button type="button" className="categories ">Víveres</button>
                    <button type="button" className="categories">Lacteos</button>
                    <button type="button" className="categories">Frutas</button>
                    <button type="button" className="categories">Carnicería</button>
                    <button type="button" className="categories">Pescadería</button>
                    <button type="button" className="categories">Limpieza</button>
                    <button type="button" className="categories">Papelería</button>
                    
                </div>
             </nav>
        </div>
    )

}
