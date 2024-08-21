const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course}/>
            <Content parts={course.parts[0]}/>
            <Content parts={course.parts[1]}/>
            <Content parts={course.parts[2]}/>
            <Total parts={course.parts}/>
        </div>
    )
}

const Header = (props) => {
    return (
        <h1> {props.course.name} </h1>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.parts.name} numExercises={props.parts.exercises}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Total number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
}

const Part = (props) => {
    return (
        <p>{props.name} {props.numExercises}</p>
    )
}


export default App