import Saludar from './Saludar.js'
import Ejercicio1 from './Ejercicio1.js';
import Clase3 from './Clase3.js';

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
        <h1> Titulo de la App </h1>
        <br/>

        <strong>{mensaje + " 2021"}</strong>
        <Saludar color="blue" nombre="Fabian"/>
        <br/>
        <hr/>

        <h1>Ejercicio 1</h1>
        <Ejercicio1/>
        <br/>
        <hr/>
        <Clase3/>
    </div>
    );
}



export default App;