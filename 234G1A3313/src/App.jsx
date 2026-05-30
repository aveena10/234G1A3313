import { useState, useEffect } from "react"

function App() {
  const [trains, setTrains] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setTrains(data))
  }, [])

  return (
    <div>
      {trains.map(train => (
        <div key={train.id}>
          <h2>{train.name}</h2>
          <p>{train.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App