import React, {useState} from 'react';


//al ser un custom hook , a diferencia de un component, posee
//parametros (no son argumentos externos sino que el usuario debe 
//pasarlos al hook)
const useSelect = (stateInicial, opciones  ) => {
    
    const [state , actualizarState ] = useState(stateInicial);

    //componente que es retornado por nuestro hook
    const SelectNoticias = () => (
        <select 
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectNoticias];
 }
 
export default useSelect;