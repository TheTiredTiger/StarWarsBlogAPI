import { useContext } from "react";
import Card from "./Card";
import { Context } from "./Context";

function CarouselView() {
    const { data, favorites, dispatch } = useContext(Context);
    // let favorites = JSON.parse(localStorage.getItem("favorites"))

    function handleAdd(newFave) {
        dispatch({
            type: "add",
            payload: newFave
        });
    };
    
    function handleDelete(faveRemove) {
    dispatch({
        type: "remove", 
        payload: faveRemove
    });
    // localStorage.setItem("favorites", JSON.stringify(
        favorites.filter(item => item.name !== faveRemove)
    // ))
    };
  

    return ( 
    <div>
        <h3 className="section-title">Characters</h3>
        <div className="container-fluid scrolling-wrapper">
            {data && data.map((person, id) => 
            <Card key={id}
            name={person.name}
            gender={person.gender}
            eye={person.eye_color}
            hair={person.hair_color}
            img={person.img}
            id={id}
            onAdd={() => {
                handleAdd(person)
                console.log(person)
            }}
            onDelete={() => handleDelete(id)}
            />)}
        </div>       
    </div>
    );
}

export default CarouselView;
