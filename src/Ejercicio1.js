

// const Titulo ({curso}) => {
//     return <h2>{curso}</h2>
// }

// const Titulo ({curso}) => <h2>{curso}</h2> --> one liner


const Titulo = (props) => {
    const {curso} = props
    // const curso = props.curso
    return(
        <h2>{curso.name}</h2>
    );
}

const Parte = (props) => {
    const {parte,ejercicio} = props
    return <p>{parte} {ejercicio}</p>
}

const Content = (props) => {
    const {contenido} = props
    return (
        <div>

            <Parte parte={contenido[0].name} ejercicio={contenido[0].ejercicios} />
            <Parte parte={contenido[1].name} ejercicio={contenido[1].ejercicios} />
            <Parte parte={contenido[2].name} ejercicio={contenido[2].ejercicios} />
        </div>
    )
}

const TotalEjecicios = (props) => {
    const {...lista} = props;
    let total = 0
    lista['totales'].forEach(element => {
        total += element['ejercicios'];
    });
    return <p>Number of exercises {total}</p>
}

const Ejercicio1 = () => {

    const course = {
        name: 'Half Stack application development',
        partes: [
            {
                name:'Fundamentals of React',
                ejercicios: 10
            },
            {
                name:'Using props to pass data',
                ejercicios: 7
            },
            {
                name: 'State of a component',
                ejercicios: 14
            }
        ]
    }

    return (
        <div>
            <Titulo curso={course}/>
            
            <Content contenido = {course.partes} />

            <TotalEjecicios totales={course.partes}/>
        </div>
    )
}

export default Ejercicio1;