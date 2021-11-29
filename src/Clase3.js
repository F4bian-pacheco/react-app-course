import {useState} from 'react';

const Clase3 = (props) => {

    const [contador,upcontador] = useState(0)
    /* useState -> [valor del estado, metodo para actualizar el estado] */

    // const value = contador[0];
    // const upvalue = contador[1];

    // setInterval(() => {
    //     upcontador(contador+1)
    // },1000)

    const handleClick = () => {
        upcontador(contador + 1);
        // upcontador(prevContador => {return prevContador + 1})
    }

    return (
        <div>
            <h1>Clase 3: Estado del componente, Renderizado Condicional y Eventos</h1>
            <h3>{contador}</h3>
            <button onClick ={handleClick}>Incrementar</button> 
        </div>
    );
}


export default Clase3;


