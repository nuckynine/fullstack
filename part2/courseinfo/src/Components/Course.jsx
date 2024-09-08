const Header = (props) => {
    return <h1>{props.name}</h1>
}

const Part = (data) => {
    return (
        <p>
            {data.name} {data.num}
        </p>
    )
}
const Content = (props) => {
    return (
        <div>
            {props.parts.map(data =>
                <Part key={data.id} name={data.name} num={data.exercises}/>
            )}
        </div>
    )
}
const Total = (props) => {
    return (
        <p>Number of exercises {props.parts.reduce((sum, part) => {
            return sum + part.exercises
        }, 0)}
        </p>)
}


const Course = ({courses}) => {
    return (
        <>
            <Header name={courses[0].name}/>
            <Content parts={courses[0].parts}/>
            <Total parts={courses[0].parts}/>
            <Header name={courses[1].name}/>
            <Content parts={courses[1].parts}/>
            <Total parts={courses[1].parts}/>
        </>
    )
}
export default Course