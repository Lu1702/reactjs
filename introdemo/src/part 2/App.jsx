const Course = (props) => {
  const {courses}  = props
  //let total =0
  return (
    <div>
      <h1>Web development curriculum</h1>
      <ul>
        {courses.map(part =>
            <li key={part.id}>
              {<h2>{part.name}</h2>}
              {part.parts.map(part2 =>
               
              <div key={part2.id}>{part2.name} {part2.exercises}</div>
              )}
              {<h3>total of {part.parts.reduce((s,p)=>s+p.exercises,0)} exercises</h3>} 
            </li>
            
        )}
      </ul>
    </div>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return <Course courses={courses}/>
}

export default App