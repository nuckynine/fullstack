const Header = (props) => {
    return <h2>{props.name}</h2>
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
        courses.map(course =>
        <>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </>
        )
    )
}
export default Course