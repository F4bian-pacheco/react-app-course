
import {useState} from 'react';


const Clase4 = () =>{
    const [left, setleft] = useState(0);
    const [right, setright] = useState(0);

    return(
        <div>
            <h1>Clase 4: Manejando estados mas complejos </h1> 
            {left}
            <button onClick={()=> setleft(left+1)} >Left</button>
            <button onClick={()=> setright(right+1)} >Right</button>
            {right}
        </div>
    );
};

export default Clase4;