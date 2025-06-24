import { useState } from 'react'
import './App.jsx'
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)
const StatisticLine = ({text,value,symbol}) => {
    return <p>{text} {value} {symbol}</p>
} 

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        <h4>No feedback given </h4>
      </div>
    )
  }
  else{
    let good =0
    let neutral =0
    let bad=0
    for(let i=0;i<props.allClicks.length;i++)
    {
      if(props.allClicks[i]=="G")good=good+1;
      if(props.allClicks[i]=="N")neutral=neutral+1;
      if(props.allClicks[i]=="B")bad=bad+1;
    }
    let total = good + neutral + bad
  return( 
    <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral}/>
      <StatisticLine text="bad" value ={bad}  />
      <StatisticLine text="total" value ={total} />
      <StatisticLine text="average" value ={(good-bad)/total} />
      <StatisticLine text="positive" value ={good*100/total} symbol={"%"}/>

    </div>
  )
  }
}
const App = () => {
  const[good,setValueGood]= useState(0)
  const[neutral,setValueNeutral]= useState(0)
  const[bad,setValueBad]= useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState()
  const handleGoodClick = () => {
    const updatedGood = good + 1
    setAll(allClicks.concat("G"))
    setValueGood(updatedGood)
    setTotal(updatedGood + neutral + bad) 
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setAll(allClicks.concat("N"))
    setValueNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad) 
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setAll(allClicks.concat("B"))
    setValueBad(updatedBad)
    setTotal(updatedBad + neutral + good) 
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <br></br>
      <h1>statictis</h1>
      <Statistics allClicks={allClicks}/>
    </div>
  )
}
export default App
