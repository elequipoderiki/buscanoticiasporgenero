import  {Fragment, useState, useEffect} from 'react';
import Header from './components/Header' ;
import Formulario from './components/Formulario' ;
import ListadoNoticias from './components/ListadoNoticias' ;

function App() {

    //definir la catefotia y noticias
    const [categoria, guardarCategoria] = useState('');
    const [noticias, guardarNoticias] = useState([]);

    useEffect(() => {

        /**************** CAMBIAR COUNTRY A ARGENTINA *********** */
         const consultarAPI = async () => {
             const url = `https://gnews.io/api/v4/top-headlines?country=pe&topic=${categoria}&token=50ff691ed5e7a807d295efebb465f0ec`;
             
             const respuesta = await fetch(url);
             const noticias = await respuesta.json();

             guardarNoticias(noticias.articles);
         }
         consultarAPI();
     }, [categoria])
 
     return (
        <Fragment>

            <Header 
                titulo='Buscador de Noticias'
            />
            <div className="container white">
                <Formulario 
                    //habilitar que desde formulario seleccione categoria
                    guardarCategoria={guardarCategoria}
                />
                <ListadoNoticias 
                    noticias={noticias}
                />
            </div>
        </Fragment>        

    );
}

export default App;
