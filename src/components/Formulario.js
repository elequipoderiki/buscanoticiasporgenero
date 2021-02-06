import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';


const Formulario = ({guardarCategoria}) => {

    //array de opciones de noticias
    const OPCIONES = [
        {value: 'breaking-news', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},
    ]
    //utilizar nuestro custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //submit al form , pasar categoriaa app.js
    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>

            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Enuentra Noticias por categoría</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input
                             type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                             value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
Formulario.propTypes = { 
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;