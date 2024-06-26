import { createContext, useState } from "react";
import axios from "axios";

const Context = createContext();

const URL = " https://swapi.dev/api/people"
let imgBase = "https://starwars-visualguide.com/assets/img/characters";

function APIContext({children}) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
          try {
          let response = await axios.get(URL)
          let people = response.data.results.map((el, i) => {
            let img = `${imgBase}/${i + 1}.jpg`;
            return {...el, img};
          })
    
          console.log(response, people);
          setData(people);
    
          } catch (err) {
            console.error(err);
          }
        }
    
        fetchData();
    
        }, [])

    return (
        <Context.Provider value={{ data, setData, fetchData }}>
            {children}
        </Context.Provider>
    )

}

export {Context, APIContext};