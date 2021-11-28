


const Saludar = (props) => {
    return(
        <p>Hola <span style={{color: props.color}}>{props.nombre}</span></p>
    )
} 


export default Saludar;