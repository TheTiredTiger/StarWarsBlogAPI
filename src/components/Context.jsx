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
              return [
                ...favorites,
              action.payload
              ]
            }
            case "remove": {
              return favorites.filter((item) => {
                return item.name !== action.payload.name
              })
            }
          }
        }

        function handleAdd(character) {
          dispatch({
              type: "add",
              payload: character
          });
        };
      
        function handleDelete(character) {
          dispatch({
              type: "remove", 
              payload: character
          });
        };

    return (
        <Context.Provider value={{ data, setData, handleAdd, handleDelete }}>
            {children}
        </Context.Provider>
    )
}

export {Context, APIContext};