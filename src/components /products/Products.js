/** Style */
import './products.css';

/** Pictures */
import logo from '../../pictures/logo.svg'

/**
 * @author: Roxana Viloria
 * @email : roxanaviloria02@gmail.com
 * @param {object} param0 
 * @returns {object}:cada producto anidado en cada categoria, una vez que es llamado, ya sea a travez del boton 
 *          de la categoria a la que correpsonde o a través del input search.
 */

export default function Products({ product }){

    return (
        <div className="productsCards">
            <img className="img" src={product.urlImage}/>
            <h1 className="title">{product.name}</h1>
            <div className="shopping">
                <span>{product.price}$</span>
                <img className="minilogo" src={logo}></img>
            </div>
        </div>

    );
}

