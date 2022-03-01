import './products.css';
import logo from '../../pictures/logo.svg'

/**
 * Componente Products para mostrar detalles del mismo
 * 
 * @author Roxana Viloria
 * @param {object} props Component props
 * @param {object} props.product objeto product con toda la informacion
 * @returns {JSX.Element} Elemento HTML con toda la informacion y estilo de un producto. 
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

