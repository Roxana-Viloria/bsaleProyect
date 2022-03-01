# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Desarrollo Proyecto Bsale.

El proyecto consiste en realizar una pantalla de un super mercado ficticio en donde los usuarios puedan ver la categoria de productos disponibles en tienda, así como,  los productos disponibles en cada categoría. 

Inicio del proyecto con desarrollo de front end, a los fines de visualizar con claridad en pantalla como deberia verse la app. 
Primera parte: arquitectura de la app: 
    Se creacron los componentes que conforman la app para su eficaz desarrollo, y son:
        
        Componente Header: implementacieon de logo de un super mercado ficticio con nombre y barra de busqueda lo que desencadena en la creación de otro componente, llamado Search cuya utilidad es que el usuario pueda hacer manualmente la busqueda dle producto que desea adquirir y verificar si forma parte del stock de la tienda. (COMPONENTE SEARCH).

        Componente Menú: Este componente tiene la funcion de hacer una barra "menu" en donde se observan las categorias de productos de la tienda, cada categoria del componente está compuesta por un boton, que al ser pulsado, ejecuta el evento onClick y despliega los productos o el producto de la categoria presionada.  

        Componente Body: El componente fue desarrollado para que en el se desplegaran todos los productos que tiene cada categoria, cada vez que alguna de ella es presionada. 

        Componente Products: La finalidad de este componente es traer cada uno de los elementos que forma parte de cada producto de la base de datos y que los traiga cada vez que sean llamados en el componente BODY.
        
        Componente Not Found: Componente creado para que la pantalla arroje un aviso cuando no se encuentre en el sistema un producto solicitado, probablemente porque no exista en la base de datos del super mercado. 
        
        AppContextProvider: se utilizó el hook appcontext para poder entrelazar los componentes y sus funciones entre si, es decir, para que los estados utilizados en cada componente sean globales. 

La aplicación funciona de manera correcta, mostrando una pantalla donde el header tiene un boton de volver la pantalla a su estado inicial y el componente search para busqueda manual de un producto. el boton de busqueda funciona tanto al presionarlo como al pulsar el boton enter en el teclado de la computadora. En la misma pantalla se observa el menú con 7 categorias de productos que son a su vez botones que al ser presionados traen al componente body( tambien reflejado en la misma pantalla) los productos o el producto de la categoria seleccionada, y en el caso de no ser encontrado el producto deseado, aparecerá en pantalla un letreto indicador de que tal producto no ha podido ser encontrado. 

Las categorias y productos se obtuvieron de una base de datos, a la cual se tuvo acceso por los datos entregados por el proveedor del ejercicio y una vez en ella se generó en backend la API REST.

La app se desarrollo con el lenguaje JavaScript, utilizando la libreria React, el framework NodeJs, Express y Sequelize. 