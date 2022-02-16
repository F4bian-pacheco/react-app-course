import Saludar from './Saludar.js'
import Ejercicio1 from './Ejercicio1.js';
import Clase3 from './Clase3.js';
import Clase4 from './Clase4.js';
import Clase5 from './Clase5.js';

// const App = () => {
//     return (
//     <div className="App">
//         Introduccion a React
//     </div>
//     );
// }

function App() {

    const mensaje = "Introduccion a React"
    return (
    <div className="App">
        <h1> Titulo de la App (Clase 1)</h1>
        <br/>

        <strong>{mensaje + " 2021"}</strong>
        <Saludar color="blue" nombre="Fabian"/>
        <br/>
        <hr/>

        <h1>Ejercicio 1 (Clase 2)</h1>
        <Ejercicio1/>
        <br/>
        <hr/>
        <Clase3/>
        <br/>
        <hr/>
        <Clase4/>
        <br />
        <hr />
        <Clase5 />
    </div>
    );
}

export default App;