import { Post } from "./Post";
import { useState } from "react";



export default function Clase6(props) {
    const [posts, setPost] = useState(props.posts) // mostrar posts
    const [newPost, SetNewPost] = useState("") // añadir post

    const HandleChange = (event) => {
        const newpost = event.target.value
        SetNewPost(newpost)
        console.log(newpost)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const postToAddState = {
            id: posts.length + 1,
            title: newPost,
            body: newPost
        }
        console.log(postToAddState)
        setPost(posts.concat(postToAddState))
        SetNewPost("")
    }

    return (
        <div>
            <h1>Clase 6: 📡 Fetching y Mutación de Datos en React con el hook useEffect</h1>
            <div>
                <h2>Posts</h2>
                <ol id="list_notes">
                    {/* No es una buena practica */}
                    {posts.map((post) => (
                        <Post key={post.id} {...post} />
                    ))}
                </ol>
                <h2>Añadir Post</h2>
                {/* Por defecto, en un formulario, el ultimo boton
                    funciona como un submit*/}
                <form onSubmit={handleSubmit}>
                    <input onChange={HandleChange} type ="text" value={newPost} />
                    <button>Crear Post</button>
                </form>
            </div>
        </div>
    )
}