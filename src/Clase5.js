
import { Note } from "./Note";
import Ejercicio5 from "./Ejercicio5";
import { useState } from "react";



const Clase5 = (props) => {

    const [notes, setNotes] = useState(props.notes) // mostrar notas
    const [newNote,SetNewNote] = useState("") // añadir notas
    const [Showall,SetShowall] = useState(true) // mostrar notas importantes

    const HandleChange = (event) => {
        const newnote = event.target.value
        SetNewNote(newnote)
        console.log(newnote)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const noteToAddState = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5
        }
        console.log(noteToAddState)
        setNotes(notes.concat(noteToAddState))
        SetNewNote("")
    }

    const handdleShowAll = () => {
        SetShowall(() => !Showall)
    }

    return (
        <div>
            <h1>Clase 5: Renderizar Listas de Elementos y Formularios</h1>
            <div>
                <h2>Notas</h2>
                <button onClick={handdleShowAll}>{Showall ? "Show only important": "Show All"}</button>
                <ol id="list_notes">
                    {/* No es una buena practica */}
                    {notes
                    .filter((note) => {
                        if (Showall === true) return true
                        return note.important === true
                    })
                    .map((note) => {
                        return <Note key={note.index} {...note} />
                    })}
                </ol>
                <Ejercicio5 />
                <h2>Añadir Notas</h2>
                {/* Por defecto, en un formulario, el ultimo boton
                    funciona como un submit*/}
                <form onSubmit={handleSubmit}>
                    <input onChange={HandleChange} type="text" value={newNote}/>
                    <button>Crear nota</button>
                </form>

            </div>
        </div>
    )
}



export default Clase5;