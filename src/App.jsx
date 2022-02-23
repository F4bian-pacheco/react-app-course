import Saludar from './Saludar.js'
import Ejercicio1 from './Ejercicio1.js';
import Clase3 from './Clase3.js';
import Clase4 from './Clase4.js';
import Clase5 from './Clase5.js';
import Clase6 from './Clase6.js';

// const App = () => {
//     return (
//     <div className="App">
//         Introduccion a React
//     </div>
//     );
// }


const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false,
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true,
    }
]

function App() {

    const mensaje = "Introduccion a React"
    return (
        <div className="App">
            <h1> Titulo de la App (Clase 1)</h1>
            <br />

            <strong>{mensaje + " 2021"}</strong>
            <Saludar color="blue" nombre="Fabian" />
            <br />
            <hr />

            <h1>Ejercicio 1 (Clase 2)</h1>
            <Ejercicio1 />
            <br />
            <hr />
            <Clase3 />
            <br />
            <hr />
            <Clase4 />
            <br />
            <hr />
            <Clase5 notes={notes} />
            <br />
            <hr />
            <Clase6 />
        </div>
    );
}

export default App;