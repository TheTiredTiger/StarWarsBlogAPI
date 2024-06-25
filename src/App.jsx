import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './App.css'
import Card from './components/Card'

const URL = " https://swapi.dev/api/people"
let imgBase = "https://starwars-visualguide.com/assets/img/characters";

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
      let response = await axios.get(URL)
      let people = response.data.results.map((el, i) => {
        let img = `${imgBase}/${i + 1}.jpg`;
        return {...el, img};
      })

      console.log(people);
      setData(people);

      } catch (err) {
        console.error(err);
      }
    }

    fetchData();

    }, []) 

  return (
    <>
      <ul>
        {data ? data.map((el) => {
        return <li key={el.name} >{el.name}</li>}) : "no data" }
      </ul>
      <h1 className="text-3xl font-bold underline">hello</h1>
      <Card />
    </>
    

  )
}

export default App;