import { Post } from "./Post";
import { useEffect, useState } from "react";
import axios from "axios";


// const posts_s = [
//     {
//         userId: 1,
//         id: 1,
//         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: "qui est esse",
//         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     }
// ]


export default function Clase6() {
    const [posts, setPost] = useState([]) // mostrar posts
    const [newPost, SetNewPost] = useState("") // añadir post
    const [Loading,SetLoading] = useState(false)

    useEffect(() => {
        SetLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((json) => {
                    const {data} = json
                    setPost(data)
                    SetLoading(false)
                })
    }, [])

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
                {Loading ? "Cargando...": ""}
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
                    <input onChange={HandleChange} type="text" value={newPost} />
                    <button>Crear Post</button>
                </form>
            </div>
        </div>
    )
}