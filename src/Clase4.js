
import {useState} from 'react';


const Nousado = () => {
    return(
        <h3>Aun no se ha usado el contador</h3>
    )
}

const ListOfClicks = ({clicks}) => {
    return <p>{clicks.join(", ")}</p>
}


const Clase4 = () =>{
    //const [left, setleft] = useState(0); // mejores opciones
    //const [right, setright] = useState(0);

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        mensaje: "Mensaje en el estado"
    });
    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
        const newcounterState = {
            ...counters,
            left: counters.left + 1,
        }
        setCounters(newcounterState);
        setClicks(prevclicks => [...prevclicks,"L"]);
    };

    const handleClickRight = () => {
        const newcounterState = {
            ...counters,
            right: counters.right + 1,
        }
        setCounters(newcounterState);
        setClicks(prevclicks => [...prevclicks,"R"]);
    };

    return(
        <div>
            <h1>Clase 4: Manejando estados mas complejos </h1> 
            {counters.left}
            <button onClick={handleClickLeft} >Left</button>
            <button onClick={handleClickRight} >Right</button>
            {counters.right}
            <p>Clicks totales: {clicks.length}</p>
            {counters.mensaje} <br/>
            {clicks.length === 0 ? (
                <Nousado/>
            ): (
                <ListOfClicks clicks={clicks}/>
            )}
        </div>
    );
};

export default Clase4;