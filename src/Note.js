

const Notes = ({ content, date }) => {
    return (
        <li>
            <p>{content}</p>
            <small>
                <time>{date}</time>
            </small>
        </li>
    )
}



export default Notes