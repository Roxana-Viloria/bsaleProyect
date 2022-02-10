import './products.css';
import logo from '../../pictures/logo.svg'

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

