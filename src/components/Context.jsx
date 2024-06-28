import { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";

const Context = createContext(null);

const URL = " https://swapi.dev/api/people"
let imgBase = "https://starwars-visualguide.com/assets/img/characters";

function APIContext({children}) {
    const [data, setData] = useState([]);
    const [favorites, dispatch] = useReducer(favoritesReducer, []);

    useEffect(() => {
        async function fetchData() {
          try {
          let response = await axios.get(URL)
          let people = response.data.results.map((el, index) => {
            let img = `${imgBase}/${index + 1}.jpg`;
            return {...el, img};
          })
    
          console.log(people);
          setData(people);
          localStorage.setItem("data", JSON.stringify(people))
    
          } catch (err) {
            console.error(err);
          }
        }
    
        fetchData();
    
    }, [])

    function favoritesReducer(favorites, action){
      switch(action.type) {
        case "add": {
          const newFave = action.payload;
          return [
            ...favorites,
            newFave
          ]
        }
        case "remove": {
          const filteredFaves = favorites.filter((item) => {
            item.name !== action.payload.name
          })
          return filteredFaves
        }
        default:
          return favorites;
      }
    }

    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])


    return (
        <Context.Provider value={{ data, setData, favoritesReducer }}>
            {children}
        </Context.Provider>
    )
}

export {Context, APIContext};