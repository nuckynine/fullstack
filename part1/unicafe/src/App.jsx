import React, {useState} from 'react'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Totals = (props) => {
    return (
        <>
            <StatisticLine text="Good" value={props.good}/>
            <StatisticLine text="Neutral" value={props.neutral}/>
            <StatisticLine text="Bad" value={props.bad}/>
            <StatisticLine text="Total" value={props.total}/>
        </>
    )
}

const Statistics = (props) => {
    if (props.total < 1) {
        return (
            <>
                No feedback given
            </>
        )
    }

    const rawScore = props.good - props.bad
    const avgScore = rawScore / props.total
    const positiveScore = props.good / props.total
    return (
        <>
            <StatisticLine text="Average:" value={avgScore}/>
            <StatisticLine text="Positive:" value={positiveScore * 100 + '%'}/>
        </>
    )
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const handleGoodClick = () => {
        setGood(good + 1)
        setTotal(total + 1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
    }
    const handleBadClick = () => {
        setBad(bad + 1)
        setTotal(total + 1)
    }

    return (
        <>
            <h1>Give Feedback</h1>
            <Button handleClick={handleGoodClick} text='Good'/>
            <Button handleClick={handleNeutralClick} text='Neutral'/>
            <Button handleClick={handleBadClick} text='Bad'/>
            <h1>Statistics</h1>
            <Totals good={good} neutral={neutral} bad={bad} total={total}/>
            <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
        </>
    )
}

export default App