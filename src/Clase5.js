
import { Note } from "./Note";
import Ejercicio5 from "./Ejercicio5";

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
    },
]



const Clase5 = () => {
    return (
        <div>
            <h1>Clase 5: Renderizar Listas de Elementos y Formularios</h1>
            <div>
                <ul>
                    {/* No es una buena practica */}
                    {notes.map((note) => <Note key={note.id} {...note} />)}
                </ul>
                <hr />
                <Ejercicio5 />
            </div>
        </div>
    )
}



export default Clase5;