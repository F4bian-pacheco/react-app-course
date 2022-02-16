

// const Titulo ({curso}) => {
//     return <h2>{curso}</h2>
// }

// const Titulo ({curso}) => <h2>{curso}</h2> --> one liner


const Titulo = (props) => {
    const { curso } = props
    // const curso = props.curso
    return (
        <h2>{curso.name}</h2>
    );
}

const Parte = (props) => {
    const { parte, ejercicio } = props
    return <p>{parte} {ejercicio}</p>
}

const Content = (props) => {
    const { contenido } = props
    return (
        <div>
            {contenido.map((content) => {
                return (
                    <Parte parte={content.name} ejercicio={content.ejercicios} />

                )
            })}
        </div>
    )
}

const TotalEjecicios = (props) => {
    const { ...lista } = props;
    let total = 0
    lista['totales'].forEach(element => {
        total += element['ejercicios'];
    });
    return <p>Number of exercises {total}</p>
}

const Ejercicio5 = () => {

    const course = {
        name: 'Half Stack application development',
        partes: [
            {
                name: 'Fundamentals of React',
                ejercicios: 10
            },
            {
                name: 'Using props to pass data',
                ejercicios: 7
            },
            {
                name: 'State of a component',
                ejercicios: 14
            }
        ]
    }

    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1,
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2,
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3,
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4,
                },
            ],
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1,
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ]

    return (
        <div>
            <Titulo curso={course} />

            <Content contenido={course.partes} />

            <TotalEjecicios totales={course.partes} />
        </div>
    )
}

export default Ejercicio5;