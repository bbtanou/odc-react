import { useEffect, useState } from "react"

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:9100/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setMsg(data.message);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  return (
    <h1>Message: {msg || 'No message'}</h1>
  )
}

export default App
