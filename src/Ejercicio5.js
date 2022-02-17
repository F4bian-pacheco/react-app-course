

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
                    <Parte parte={content.name} ejercicio={content.exercises} />

                )
            })}
        </div>
    )
}

const TotalEjecicios = (props) => {
    const { ...lista } = props;
    let total = 0
    lista['totales'].forEach(element => {
        total += element['exercises'];
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
        {
            name: 'Node.js',
            id: 3,
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
        {
            name: 'Node.js',
            id: 4,
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
        {
            name: 'Node.js',
            id: 5,
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
        }
    ]

    return (
        <div className="div-clase5">
            {courses.map((curso) => {
                return (
                    <div key={curso.id}>
                        <Titulo curso={curso} />

                        <Content contenido={curso.parts} />

                        <TotalEjecicios totales={curso.parts} />
                    </div>
                )
            })}
        </div>
    )
}

export default Ejercicio5;