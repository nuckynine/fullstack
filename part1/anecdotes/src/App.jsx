import {useState} from 'react'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const DisplayVotes = (votes) => (
    <p>has {votes.votes} votes</p>
)

const DisplayPopularAnecdote = (props) => {
    return (
        <>
            <p>{props.anecdote}</p>
            <p> has {props.numVotes} votes</p>
        </>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const arr = Array(anecdotes.length).fill(0)
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(arr)

    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }
    
    function getPopularAnecdoteAndVotes() {
        let index = 0;
        let numVotes = 0;
        for(let i = 0; i < anecdotes.length ; i++){
            if(votes[i] > numVotes){
                index = i;
                numVotes = votes[i]
            }
        }
        let anecdote = anecdotes[index]
        return {anecdote, numVotes}
    }

    const GetRandomAnecdote = () => {
        setSelected(getRandomIntInclusive(0, anecdotes.length - 1))
    }

    const Upvote = () => {
        const copy = {...votes}
        copy[selected] += 1
        setVotes(copy)
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <DisplayVotes votes={votes[selected]}/>
            <Button handleClick={Upvote} text='Vote'/>
            <Button handleClick={GetRandomAnecdote} text='Next'/>
            <h1>Anecdote with the most votes</h1>
            <DisplayPopularAnecdote anecdote ={getPopularAnecdoteAndVotes().anecdote} numVotes={getPopularAnecdoteAndVotes().numVotes}/>
        </div>
    )
}

export default App